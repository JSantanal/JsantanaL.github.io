// script.js

function abrirModal() {
    const imagen = document.getElementById('bienvenido-imagen');

    // Establecemos el estilo para que la imagen se mueva al centro y se agrande
    imagen.style.transform = "scale(2)"; // Aumentamos el tamaño de la imagen
    imagen.style.position = "fixed"; // La imagen se posicionará fija
    imagen.style.left = "50%"; // Centramos horizontalmente
    imagen.style.top = "50%"; // Centramos verticalmente
    imagen.style.transform = "translate(-50%, -50%) scale(2)"; // Ajustamos para que quede centrada y agrandada

    // Mostramos el modal con la imagen ampliada
    const modal = document.getElementById("modal-imagen");
    const imgModal = document.getElementById("img-modal");
    
    imgModal.src = imagen.src; // Establece la imagen en el modal
    modal.style.display = "block"; // Muestra el modal
}

function cerrarModal() {
    const modal = document.getElementById("modal-imagen");
    modal.style.display = "none"; // Cierra el modal
    
    // Restauramos la imagen a su tamaño y posición original
    const imagen = document.getElementById('bienvenido-imagen');
    imagen.style.transform = "scale(1)";
    imagen.style.position = "relative";
    imagen.style.left = "0";
    imagen.style.top = "0";
}


// Función para cambiar el idioma
function cambiarIdioma() {
    var idioma = document.getElementById("idioma").value;

    // Cambiar el texto de la página según el idioma seleccionado
    if (idioma === "es") {
        document.getElementById("titulo").innerText = "Biografía de Jhanciel F Santana Leon";
        document.getElementById("inicio-link").innerText = "Inicio";
        document.getElementById("acerca-link").innerText = "Acerca de";
        document.getElementById("logros-link").innerText = "Logros";
        document.getElementById("contacto-link").innerText = "Contacto";
        document.getElementById("bienvenido").innerText = "Bienvenido a mi biografía";
        document.getElementById("descripcion").innerText = "Hola, soy Jhanciel F Santana Leon, un apasionado por la tecnología y el desarrollo web.";
        document.getElementById("acerca-titulo").innerText = "Acerca de mí";
        document.getElementById("acerca-descripcion").innerText = "Nací en Moca Las Lagunas, Republica Dominicana, y desde joven me e interesado por la programación. Estoy en desarrollo de mi propia empresa de ternologia y programacion.";
        document.getElementById("acerca-detalle").innerText = "Mi especialidad es el desarrollo web, aunque también tengo experiencia en aplicaciones móviles y Programacion de Video Juegos.";
        document.getElementById("logros-titulo").innerText = "Logros y proyectos";
        document.getElementById("logro1").innerText = "Desarrollé Esta Web";
        document.getElementById("logro2").innerText = "En Proceso de Crea mi propia Red social Jcomments.";
        document.getElementById("logro3").innerText = "He logrado acomular mucho conocimiento sobre como funciona la ternologia y sus avanzes.";
        document.getElementById("contacto-titulo").innerText = "Contacto";
        document.getElementById("contacto-descripcion").innerText = "Si deseas contactarme, puedes hacerlo a través de mis redes sociales o enviando un correo electrónico:";
        document.getElementById("email").innerText = "Email:";
        document.getElementById("instragram").innerText = "Instragram:";

        document.getElementById("idioma").options[0].innerText = "Español"; // Cambiar el texto del selector a Español
        document.getElementById("idioma").options[1].innerText = "English";  // Cambiar el texto del selector a Inglés
    }

    // Inglés
    else if (idioma === "en") {
        document.getElementById("titulo").innerText = "Biography of Jhanciel F Santana Leon";
        document.getElementById("inicio-link").innerText = "Home";
        document.getElementById("acerca-link").innerText = "About Me";
        document.getElementById("logros-link").innerText = "Achievements";
        document.getElementById("contacto-link").innerText = "Contact";
        document.getElementById("bienvenido").innerText = "Welcome to my biography";
        document.getElementById("descripcion").innerText = "Hello, I'm Jhanciel F Santana Leon, a passionate person about technology and web development.";
        document.getElementById("acerca-titulo").innerText = "About Me";
        document.getElementById("acerca-descripcion").innerText = "I was born in Moca Las Lagunas, Dominican Republic, and from a young age, I got interested in programming. I studied Computer Engineering at the University of Madrid and have worked on various projects related to technology.";
        document.getElementById("acerca-detalle").innerText = "My specialty is web development, although I also have experience in mobile applications and video game programming.";
        document.getElementById("logros-titulo").innerText = "Achievements and Projects";
        document.getElementById("logro1").innerText = "I developed this website";
        document.getElementById("logro2").innerText = "In the process of creating my own social network Jcomments.";
        document.getElementById("logro3").innerText = "I have managed to accumulate a lot of knowledge about how ternology works and its advances.";
        document.getElementById("contacto-titulo").innerText = "Contact";
        document.getElementById("contacto-descripcion").innerText = "If you want to contact me, you can do it through my social media or by sending an email:";
        document.getElementById("email").innerText = "Email:";
        document.getElementById("instragram").innerText = "Instragram:";

        document.getElementById("idioma").options[0].innerText = "Spanish"; // Cambiar el texto del selector a Español
        document.getElementById("idioma").options[1].innerText = "English"; // Cambiar el texto del selector a Inglés
    }
}

// Función para detectar el scroll y mover el pie de página
let lastScrollTop = 0; // variable para almacenar la posición del último scroll
const footer = document.getElementById("footer");

window.addEventListener("scroll", function() {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        // Si se está deslizando hacia abajo
        footer.classList.add("hidden");
    } else {
        // Si se está deslizando hacia arriba
        footer.classList.remove("hidden");
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // para evitar que se quede en valores negativos
});

document.addEventListener("DOMContentLoaded", function() {
    cambiarIdioma();
});
