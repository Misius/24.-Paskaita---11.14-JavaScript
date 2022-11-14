export function crEl(tagName, dest, className, text) {
    const el = document.createElement(tagName);
    if (className) el.className = className;
    if (text || text === 0) el.textContent = text;
    dest.append(el);
    // console.log(el);
    return el;
  }


  const dest = document.createElement('output');

  export function generateUsersList(arr) {
    arr.forEach((el) => generateCard(el));
  }



  function generateCard(obj) {
    const artEl = crEl('article', dest, 'card');
    const imgEl = crEl('img', artEl, 'card__img');
    imgEl.src = obj.avatar;
    imgEl.alt = obj.last__name;
  } 