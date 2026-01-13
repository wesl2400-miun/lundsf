
export const newTag = (type, css, text, root) => {
  const tag = document.createElement(type);
  if(css) tag.classList.add(css);
  if(text) tag.textContent = text;
  if(root) root.appendChild(tag);
  return tag;
}

export const getTag = (id) => {
  return document.getElementById(id);
}

export const newSec = (root) => {
  return newTag('section', 'card', null, root);
}

export const newP = (text, root) => {
  return newTag('p', null, text, root);
}

export const newH1 = (text, root) => {
  return newTag('h1', 'headline', text, root);
}

export const newH2 = (text, root) => {
  return newTag('h2', null, text, root);
}

export const newH3 = (text, root) => {
  return newTag('h3', null, text, root);
}

export const newBtn = (style, label, root) => {
  return newTag('button', style, label, root);
}

export const newDiv = (style, root) => {
  return newTag('div', style, null, root);
}

export const loadRec = (key) => {
  const json = sessionStorage.getItem(key);
  return JSON.parse(json);
}

export const saveRec = (key, record) => {
  const json = JSON.stringify(record);
  return sessionStorage.setItem(key, json);
}

export const remRec = (key) => {
  sessionStorage.removeItem(key);
}
