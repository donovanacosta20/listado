const agregarButton = document.getElementById('agregar');
const inputItem = document.getElementById('item');
const contenedor = document.getElementById('contenedor');
const listElement = [];

agregarButton.addEventListener('click', () => {
    listElement.push(inputItem.value);
    updateListContainer(listElement);
    inputItem.value = '';
});

function updateListContainer(listElement) {
    contenedor.innerHTML = listElement.map(item => `<li>${item}</li>`).join('')
}