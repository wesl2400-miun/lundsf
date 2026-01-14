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

// Hämtar json data från sessionStorage och omvandlar den till objekt
export const loadRec = (key) => {
  const json = sessionStorage.getItem(key);
  return JSON.parse(json);
}

// Omvandlar objekt till json och sparar det i sessionStorage
export const saveRec = (key, record) => {
  const json = JSON.stringify(record);
  return sessionStorage.setItem(key, json);
}

// Tar bort data via referens
export const remRec = (key) => {
  sessionStorage.removeItem(key);
}
