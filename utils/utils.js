export function value(id) {
    if(!id) return null;
    return document.getElementById(id)?.value.trim();
  }
  
  export function setValue(id, val) {
    if(!id && !val) return null;
    document.getElementById(id).value = val;
  }
  
  export function randomId() {
    return Math.random().toString(36).substring(2, 9).toUpperCase();
  }
  