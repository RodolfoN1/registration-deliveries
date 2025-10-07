import { STORAGE_KEYS, getItem, setItem } from '../storage.js';
import { value, setValue, randomId } from '../../utils/utils.js';
import { cardHtml } from './card-html.js';

export function renderDeliverySection(main, updateSampleJson) {
  if(!main || !updateSampleJson) return;
  
  const section = document.createElement("section");
  section.className = "card";
  section.innerHTML = cardHtml;
  main.appendChild(section);

  populateBranchSelect("destBranch");

  section.querySelector("#saveDelivery").onclick = () => saveDelivery(updateSampleJson);
  section.querySelector("#clearDeliveries").onclick = () => clearDeliveries(updateSampleJson);
  section.querySelector("#originCep").addEventListener("blur", getCEP);
}

async function getCEP() {
  const regexOnlyNumbers = /\D/g;
  const cep = value("originCep").replace(regexOnlyNumbers, "");
  const error = document.getElementById("cepError");
  if(!cep) return;
  if (cep.length !== 8) return (error.textContent = "CEP inválido!");
  if(!error) return;
  error.textContent = "";

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (data.erro) throw new Error("CEP não encontrado!");
    setValue("street", data.logradouro);
    setValue("city", data.localidade);
    setValue("cepState", data.uf);
  } catch {
    error.textContent = "Error consultar CEP!";
  }
}

function saveDelivery(updateSampleJson) {
  const cep = value("originCep");
  const dest = value("destBranch");
  const deadline = value("deadline");
  const description = value("description");

  if (!cep || !dest || !deadline || !description) return alert("Preencha todos os campos.");

  const deliveries = getItem(STORAGE_KEYS.DELIVERIES);
  if(!deliveries) return;

  deliveries.push({
    id: randomId(),
    originCep: cep,
    street: value("street"),
    city: value("city"),
    cepState: value("cepState"),
    destBranch: dest,
    deadline,
    description,
    status: "PENDENTE",
  });

  setItem(STORAGE_KEYS.DELIVERIES, deliveries);
  alert("Entrega registrada!");
  const deliveryForm = document.getElementById("deliveryForm");
  deliveryForm?.reset();
  updateSampleJson();
}

function clearDeliveries(updateSampleJson) {
  if (confirm("Limpar todas as entregas?")) {
    localStorage.removeItem(STORAGE_KEYS.DELIVERIES);
    updateSampleJson();
  }
}

export function populateBranchSelect(id, useZoom = false) {
  if(!id) return;
  
  const destinationBranch = document.getElementById(id);
  
  if(!destinationBranch) return;

  destinationBranch.innerHTML = "";

  const branches = getItem(STORAGE_KEYS.BRANCHES);
  if(!branches) return;

  getItem(STORAGE_KEYS.BRANCHES).forEach((b) => {
    const opt = document.createElement("option");
    opt.value = useZoom ? b.zoom : b.code;
    opt.textContent = useZoom ? `${b.zoom} (${b.code})` : `${b.code} — ${b.name}`;
    destinationBranch.appendChild(opt);
  });
}
