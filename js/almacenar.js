const agregarButton = document.getElementById('agregar');
const inputItem = document.getElementById('item');
const contenedor = document.getElementById('contenedor');
const listElement = [];

function init() {
  contenedor.innerHTML = JSON.parse(localStorage.getItem('elementos') || '[]')
    .map((listElement) => `<li>${listElement}</li>`)
    .join('');
}

init();

agregarButton.addEventListener('click', () => {
  listElement.push(inputItem.value);
  updateListContainer(listElement);
  inputItem.value = '';
  guardarDatos();
});

function updateListContainer(listElement) {
  contenedor.innerHTML += listElement
    .map((listElement) => `<li>${listElement}</li>`)
    .join('');
}

function guardarDatos() {
  localStorage.setItem(
    'elementos',
    JSON.stringify([
      ...JSON.parse(localStorage.getItem('elementos') || '[]'),
      ...listElement,
    ])
  );
}
