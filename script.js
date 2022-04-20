'use strict';

/* A partir de los datos de la API https://rickandmortyapi.com/api/character
generar una ficha por cada personaje que devuelva que incluya, por lo menos, la imagen,
el nombre, el estado y la especie.
BONUS: algún elemento diferenciará visualmente el estado*/

// Personaje de PRUEBA

async function getData(url) {
  const res = await fetch(url);
  const data = res.json();
  return data;
}

async function getCharacterData() {
  const { results } = await getData(
    'https://rickandmortyapi.com/api/character'
  );
  return results;
}
getCharacterData();

const main = document.querySelector('main');

function generateCard({ image, name, status, species }) {
  return `
  <article>
      <header>
        <img src="${image}" alt="Imagen de ${name}">
        <h2>${name}</h2>
      </header>
      <section>
        <p class="${status}">${status}</p>
        <p>${species}</p>
      </section>
    </article>
  `;
}

async function appenCards() {
  const chars = await getCharacterData();

  let htmlString = '';
  for (const char of chars) {
    const chaCardHTML = generateCard(char);
    htmlString += chaCardHTML;
  }
  main.innerHTML = htmlString;
}
appenCards();
