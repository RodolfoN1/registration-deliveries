export const STORAGE_KEYS = {
    BRANCHES: "branches_v1",
    DELIVERIES: "deliveries_v1",
};

export function getItem(key, fallback = []) {
    try {
        return JSON.parse(localStorage.getItem(key)) || fallback;
    } catch {
        return fallback;
    }
}

export function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value, null, 2));
}

export function localStorageDefaults(SAMPLE_BRANCHES) {
    if (!localStorage.getItem(STORAGE_KEYS.BRANCHES))
        setItem(STORAGE_KEYS.BRANCHES, SAMPLE_BRANCHES);
    if (!localStorage.getItem(STORAGE_KEYS.DELIVERIES))
        setItem(STORAGE_KEYS.DELIVERIES, []);
}
