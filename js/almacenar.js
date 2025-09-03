const agregarButton = document.getElementById('agregar');
const inputItem = document.getElementById('item');
const contenedor = document.getElementById('contenedor');

function init() {
  contenedor.innerHTML = JSON.parse(localStorage.getItem('elementos') || '[]')
    .map((listElement) => `<li class="list-group-item">${listElement}</li>`)
    .join('');
}

init();

agregarButton.addEventListener('click', () => {
  inputText = inputItem.value;

  if (inputText.trim() === '') {
    alert('Por favor, ingrese un elemento válido.');
    return;
  }
  if (verificarSiElementoExiste(inputText)) {
    alert('El elemento ya existe en la lista.');
    return;
  }
  contenedor.innerHTML += `<li class="list-group-item">${inputText}</li>`;
  guardarDatos(inputText);
  inputItem.value = '';
});

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
