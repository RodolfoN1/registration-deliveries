import { STORAGE_KEYS, getItem, setItem } from '../storage.js';
import { value } from '../../utils/utils.js';
import { cardHtml } from './card-html.js';

export function renderBranchSection(main, updateSampleJson) {
  if (!main || !updateSampleJson) return;
  const section = document.createElement("section");
  section.className = "card";
  section.innerHTML = cardHtml;

  main.appendChild(section);

  renderBranches(updateSampleJson);

  section.querySelector("#saveBranch").onclick = () => saveBranch(updateSampleJson);
  section.querySelector("#clearBranches").onclick = () => clearBranches(updateSampleJson);
}

export function renderBranches(updateSampleJson) {
  if(!updateSampleJson) return;

  const tbody = document.querySelector("#branchesTable tbody");

  if (!tbody) return;

  const branches = getItem(STORAGE_KEYS.BRANCHES);

  tbody.innerHTML = "";
  if(!branches && branches.length === 0 ) return;

  branches.forEach((b) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${b.code}</td>
      <td>${b.name}</td>
      <td>${b.address}</td>
      <td>${b.response}</td>
      <td>${b.zoom}</td>
      <td>
        <button 
          class="btn btn-danger" 
          data-code="${b.code}"
        >
          Remover
        </button>
      </td>
    `;
    row.querySelector("button").onclick = () => removeBranch(b.code, updateSampleJson);
    tbody.appendChild(row);
  });
}

function saveBranch(updateSampleJson) {
  if(!updateSampleJson) return;

  const code = value("branchCode");
  const name = value("branchName");
  const address = value("branchAddress");
  const response = value("branchResponse");
  const zoom = value("branchZoom");

  if (!code || !name || !address || !response || !zoom) return alert("Todos os campos são obrigatórios.");

  const branches = getItem(STORAGE_KEYS.BRANCHES);
  if (branches && branches.some((b) => b.code === code)) return alert("Código já cadastrado.");

  branches?.push({ code, name, address, response, zoom });
  setItem(STORAGE_KEYS.BRANCHES, branches);
  const branchForm = document.getElementById("branchForm")
  branchForm?.reset();
  renderBranches(updateSampleJson);
  updateSampleJson();
}

function clearBranches(updateSampleJson) {
  if (confirm("Limpar todas as filiais?")) {
    localStorage.removeItem(STORAGE_KEYS.BRANCHES);
    renderBranches(updateSampleJson);
    updateSampleJson();
  }
}

function removeBranch(code, updateSampleJson) {
  const filtered = getItem(STORAGE_KEYS.BRANCHES).filter((b) => b.code !== code);
  if(!filtered) return;
  setItem(STORAGE_KEYS.BRANCHES, filtered);
  renderBranches(updateSampleJson);
  updateSampleJson();
}
