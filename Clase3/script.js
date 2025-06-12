const infoText = document.getElementById('info-text');

const dataContainer = document.getElementById('data-container');

const fetchBtn = document.getElementById('fetch-btn');
const ts = '1';
  const publicKey = 'cc01699e78910cb80e4c916358477dea';
  const privateKey = '4372e1745aa4b86f2d5dcb091c4c6cc5388b2c84';

  const hash = md5(ts + privateKey + publicKey);

fetchBtn.addEventListener('click', () => {  
    infoText.textContent = 'Datos obtenidos usando Fetch.';
    fetch(`https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
        .then(res => {
        if (!res.ok) throw new Error('Error en la solicitud');
        return res.json();
    })
    .then(data => {
      dataContainer.innerHTML = '';
      data.data.results.forEach(personaje => {
        const card = document.createElement('div');
        card.innerHTML = `
          <h3>${personaje.name}</h3>
          <img src="${personaje.thumbnail.path}.${personaje.thumbnail.extension}" alt="${personaje.name}" width="150" />
        `;
        dataContainer.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error:', error);
      dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });
});


const axiosBtn = document.getElementById('axios-btn');

axiosBtn.addEventListener('click', () => {  
    infoText.textContent = 'Datos obtenidos usando Axios.';
  const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  axios.get(url)
    .then(response => {
      const personajes = response.data.data.results;
      dataContainer.innerHTML = '';

      personajes.forEach(personaje => {
        const card = document.createElement('div');
        card.innerHTML = `
          <h4>${personaje.name}</h4>
          <img src="${personaje.thumbnail.path}.${personaje.thumbnail.extension}" alt="${personaje.name}" width="150" />
        `;
        dataContainer.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error:', error);
      dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });
});
const clearBtn = document.getElementById('clear-btn');

clearBtn.addEventListener('click', () => {
  dataContainer.innerHTML = '';  // Limpia los personajes
  infoText.textContent = '';      // Limpia el mensaje
});
