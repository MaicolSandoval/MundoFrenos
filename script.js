function mostrarSeccion(id) {
    // Oculta todas las secciones
    document.getElementById("contenedorFrenos").classList.add("d-none");
    document.getElementById("contenedorReparaciones").classList.add("d-none");
    document.getElementById("contenedorNosotros").classList.add("d-none");

    // Oculta la imagen de inicio
    document.getElementById("imagenInicio").classList.add("d-none");

    // Muestra la sección correspondiente
    if (id) {
        document.getElementById(id).classList.remove("d-none");
    }
}

// Eventos de clic para cambiar de sección
document.getElementById("mostrarFrenos").addEventListener("click", function(event) {
    event.preventDefault();
    mostrarSeccion("contenedorFrenos");
});

document.getElementById("mostrarReparaciones").addEventListener("click", function(event) {
    event.preventDefault();
    mostrarSeccion("contenedorReparaciones");
});

document.getElementById("mostrarNosotros").addEventListener("click", function(event) {
    event.preventDefault();
    mostrarSeccion("contenedorNosotros");
});

// Restaurar la imagen en la sección de inicio
document.querySelector(".nav-link[href='#']").addEventListener("click", function(event) {
    event.preventDefault();
    mostrarSeccion("");
    document.getElementById("imagenInicio").classList.remove("d-none");
});