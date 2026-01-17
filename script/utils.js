// Hjälpfunktioner

// Skapar ny tagg
export const newTag = (type, css, text, root) => {
  const tag = document.createElement(type);
  if(css) tag.classList.add(css);
  if(text) tag.textContent = text;
  if(root) root.appendChild(tag);
  return tag;
}

// Hämtar en tagg via referens
export const getTag = (id) => {
  return document.getElementById(id);
}

// Skapar ny sektion
export const newSec = (root) => {
  return newTag('section', 'card', null, root);
}

// Skapar ny paragraf
export const newP = (text, root) => {
  return newTag('p', null, text, root);
}

// Skapar nya rubriker av olika grader
export const newH1 = (text, root) => {
  return newTag('h1', 'headline', text, root);
}

export const newH2 = (text, root) => {
  return newTag('h2', null, text, root);
}

export const newH3 = (text, root) => {
  return newTag('h3', null, text, root);
}

// Skapar ny knapp
export const newBtn = (style, label, root) => {
  return newTag('button', style, label, root);
}

// Skapar en universell behållare för taggar
export const newDiv = (style, root) => {
  return newTag('div', style, null, root);
}

// Hämtar från data från sessionStorage
export const loadRec = (key) => {
  return sessionStorage.getItem(key);
}

// Sparar data i sessionStorage
export const saveRec = (key, record) => {
  return sessionStorage.setItem(key, record);
}

// Tar bort data från sessionStorage via referens
export const remRec = (key) => {
  sessionStorage.removeItem(key);
}

// Hitta en tagg med ett specifikt attrbut
export const tagBy = (tagSpec) => {
  return document.querySelector(`${tagSpec}`);
}

// Hitta en tagglista med ett specifikt attribut
export const tagsBy = (tagSpec) => {
  return document.querySelectorAll(`${tagSpec}`);
}