 document.addEventListener('DOMContentLoaded', function() {
    const btnLimpiar = document.getElementById('limpiar');
    const contenedorLista = document.getElementById('contenedor');
    

    btnLimpiar.addEventListener('click', function() {
       
        localStorage.removeItem('elementos');
        
        contenedorLista.innerHTML = '';
        
       console.log('Lista limpiada correctamente');

    });
});