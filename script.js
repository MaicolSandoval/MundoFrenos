document.getElementById("mostrarFrenos").addEventListener("click", function(event) {
    event.preventDefault(); // Evita la recarga de la página
    document.getElementById("contenedorFrenos").classList.toggle("d-none"); // Alterna visibilidad
});