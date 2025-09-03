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
  if (inputItem.value.trim() === '') {
    alert('Por favor, ingrese un elemento válido.');
    return;
  }
  contenedor.innerHTML += `<li>${inputItem.value}</li>`;
  if (!verificarSiElementoExiste(inputItem.value)) {
    guardarDatos(inputItem.value);
    inputItem.value = '';
    return;
  }
  alert('El elemento ya existe en la lista.');
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

function verificarSiElementoExiste(text) {
  const elementos = JSON.parse(localStorage.getItem('elementos') || '[]');
  return elementos.includes(text);
}
