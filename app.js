const key = 'AF0iPYP1DRI8r9qj5HhrRy7JTRaA8OjI';
const url = 'https://api.giphy.com/v1/gifs/search?q=';  
const form = document.querySelector('#search');
const input = document.querySelector('#search-input');
const button = document.querySelector('#search-button');
const container = document.querySelector('#container');
const results = document.querySelector('#results');
const remove = document.querySelector('#remove');


form.addEventListener('submit', event => {
  event.preventDefault();
  getGiphy(input.value);
  input.value = "";
});

button.addEventListener('click', event => {
  event.preventDefault();
  getGiphy(input.value);
  input.value = "";
});

remove.addEventListener('click', event => {
  event.preventDefault();
  let child = results.lastElementChild;
  while (child) {
    results.removeChild(child);
    child = results.lastElementChild;
  }
});

async function getGiphy(search) {
  const response = await axios.get(url + search + '&api_key=' + key);
  console.log(response);
  let random = Math.floor(Math.random() * response.data.data.length);
  const img = document.createElement('img');
  img.src = response.data.data[random].images.downsized.url;
  results.appendChild(img);
};


