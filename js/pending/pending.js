import { STORAGE_KEYS, getItem, setItem } from '../storage.js';
import { value } from '../../utils/utils.js';
import { populateBranchSelect } from '../deliveries/deliveries.js';
import { cardHtml } from './card-html.js';

export function renderPendingSection(main, updateSampleJson) {
    if(!main || !updateSampleJson) return;

    const section = document.createElement("section"); 

    section.className = "card";

    section.innerHTML = cardHtml;

    main.appendChild(section);

    populateBranchSelect("loginZoom", true);
    
    renderPending(updateSampleJson);
}

export function renderPending(updateSampleJson) {
    const tbody = document.querySelector("#pendingTable tbody");
    const deliveries = getItem(STORAGE_KEYS.DELIVERIES);
    const branches = getItem(STORAGE_KEYS.BRANCHES);

    if (!tbody || !deliveries || !branches) return;

    tbody.innerHTML = "";

    deliveries.forEach((delivery) => {
        const branch = branches.find((b) => b.code === delivery.destBranch);
        const trElement = document.createElement("tr");
        trElement.innerHTML = `
            <td>${delivery.id}</td>
            <td>${delivery.originCep}</td>
            <td>${branch?.name ?? delivery.destBranch}</td>
            <td>${delivery.deadline}</td>
            <td>${delivery.description}</td>
            <td>${delivery.status}</td>
            <td></td>
        `;
        const tdLast = trElement.querySelector("td:last-child");
        
        if (delivery.status === "PENDENTE") {
            const btn = document.createElement("button");

            if (!btn) return;

            btn.className = "btn small";

            btn.textContent = "Confirmar";

            btn.onclick = () => confirmDelivery(delivery.id, updateSampleJson);

            tdLast.appendChild(btn);
        } else {
            tdLast.textContent = `Confirmado por ${delivery.confirmedBy}`;
        }
        tbody.appendChild(trElement);
    });
}

function confirmDelivery(id, updateSampleJson) {
    if(!id || !updateSampleJson) return;

    const user = value("loginZoom");

    if (!user) return alert("Selecione o responsável.");

    const deliveries = getItem(STORAGE_KEYS.DELIVERIES);

    const delivery = deliveries.find((d) => d.id === id);

    if (!delivery) return;

    delivery.status = "CONFIRMADO";
    delivery.confirmedBy = user;
    delivery.confirmedAt = new Date().toISOString();
    setItem(STORAGE_KEYS.DELIVERIES, deliveries);
    renderPending(updateSampleJson);
}
