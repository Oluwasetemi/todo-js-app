// Create an element with provided attributes and optional children
export function h(e, attrs, ...children) {
  const elem = document.createElement(e);

  for (const [key, value] of Object.entries(attrs)) {
    if (key.startsWith("on") && typeof value === "function") {
      // Event listener (e.g. onclick, onchange)
      const event = key.slice(2).toLowerCase();
      elem.addEventListener(event, value);
    } else if (typeof value === "boolean") {
      // Boolean attributes (e.g. checked, disabled)
      if (value) elem.setAttribute(key, "");
    } else {
      elem.setAttribute(key, String(value));
    }
  }

  elem.append(...children);
  return elem;
}
