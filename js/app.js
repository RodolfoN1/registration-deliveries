import { localStorageDefaults } from './storage.js';
import { renderBranchSection } from './branches/branches.js';
import { renderDeliverySection } from './deliveries/deliveries.js';
import { renderPendingSection } from './pending/pending.js';


const SAMPLE_BRANCHES = [
    { code: "001", name: "Filial A", address: "Rua A", response: "R1", zoom: "zoom1" },
    { code: "002", name: "Filial B", address: "Rua B", response: "R2", zoom: "zoom2" },
];

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
    localStorageDefaults(SAMPLE_BRANCHES);
    setupTabs();
    updateSampleJson();
}

function setupTabs() {
    const navButtons = document.querySelectorAll("nav button");
    if (!navButtons) return;

    navButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            navButtons.forEach((navs) => {
                if (navs !== btn) navs.classList.remove("is--active");
            });
            btn.classList.add("is--active");
            showTab(btn.dataset.tab)
        });
    });
    showTab("branches");
}

function showTab(tabId) {
    if(!tabId) return;

    const main = document.getElementById("content");

    if(!main) return;

    main.innerHTML = "";

    if (tabId === "branches") renderBranchSection(main, updateSampleJson);
    if (tabId === "delivery") renderDeliverySection(main, updateSampleJson);
    if (tabId === "pending") renderPendingSection(main, updateSampleJson);
}

export function updateSampleJson() {
    const obj = {
        branches: JSON.parse(localStorage.getItem("branches_v1")) || [],
        deliveries: JSON.parse(localStorage.getItem("deliveries_v1")) || []
    };
    const sampleJson = document.getElementById("sampleJson");
    if (sampleJson) {
        sampleJson.textContent = JSON.stringify(obj, null, 2);
    }
}
