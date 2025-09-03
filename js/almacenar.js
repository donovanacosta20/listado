const agregarButton = document.getElementById('agregar');
const inputItem = document.getElementById('item');
const contenedor = document.getElementById('contenedor');

function init() {
  contenedor.innerHTML = JSON.parse(localStorage.getItem('elementos') || '[]')
    .map((listElement) => `<li>${listElement}</li>`)
    .join('');
}

init();

agregarButton.addEventListener('click', () => {
  contenedor.innerHTML += `<li>${inputItem.value}</li>`;
  guardarDatos(inputItem.value);
  inputItem.value = '';
});

function updateListContainer(listElement) {
  contenedor.innerHTML += listElement
    .map((listElement) => `<li>${listElement}</li>`)
    .join('');
}

function guardarDatos(text) {
  localStorage.setItem(
    'elementos',
    JSON.stringify([
      ...JSON.parse(localStorage.getItem('elementos') || '[]'),
      text,
    ])
  );
}
