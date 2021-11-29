const selectors = ["body", "img", "video", "iframe"];
const style = document.createElement("style");
style.innerHTML = `${selectors.join(", ")} { filter: invert(1); }`;
document.querySelector("head").appendChild(style);