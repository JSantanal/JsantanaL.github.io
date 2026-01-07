// script.js - Versión mejorada con más funcionalidades

// ==================== MODAL DE IMAGEN ====================
function abrirModal(src) {
    const imagen = document.getElementById('bienvenido-imagen');
    const modal = document.getElementById("modal-imagen");
    const imgModal = document.getElementById("img-modal");

    imgModal.src = src || imagen.src;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function cerrarModal() {
    const modal = document.getElementById("modal-imagen");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

// Cerrar modal al presionar Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        cerrarModal();
    }
});

// Cerrar modal al hacer clic fuera de la imagen
window.addEventListener('click', (e) => {
    const modal = document.getElementById("modal-imagen");
    if (e.target === modal) {
        cerrarModal();
    }
});

// Detección automática de idioma según la ubicación
function detectarIdiomaAutomatico() {
    // Obtener idioma del navegador
    const idiomaBrowser = navigator.language || navigator.userLanguage;
    let idiomaDetectado = 'es';

    // Detectar idioma por región
    if (idiomaBrowser.includes('en')) {
        idiomaDetectado = 'en';
    } else if (idiomaBrowser.includes('es')) {
        idiomaDetectado = 'es';
    }

    // Comprobar si ya hay preferencia guardada
    const idiomaGuardado = localStorage.getItem('idioma');
    if (!idiomaGuardado) {
        // Hacer llamada geolocation (opcional - solo con permiso)
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const coords = `${position.coords.latitude},${position.coords.longitude}`;
                    // Aquí podrías hacer una llamada a una API para detectar país
                    console.log('Ubicación detectada:', coords);
                },
                error => console.log('Geolocalización no disponible')
            );
        }

        // Aplicar idioma detectado
        document.getElementById('idioma').value = idiomaDetectado;
        cambiarIdioma();
    }
}
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Cerrar menú cuando se hace clic en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.remove('active');
    });
});

// ==================== CAMBIO DE IDIOMA ====================
const translations = {
    es: {
        titulo: "JF Santana",
        "inicio-link": "Inicio",
        "acerca-link": "Acerca",
        "cursos-link": "Cursos",
        "portafolio-link": "Portafolio",
        "blog-link": "Blog",
        "donaciones-link": "Donar",
        "contacto-link": "Contacto",
        bienvenido: "Bienvenido a mi Mundo",
        descripcion: "Soy Jhanciel F Santana Leon, Desarrollador Web Apasionado",
        "btn-contacto": "Contáctame",
        "btn-portafolio": "Ver Portafolio",
        "acerca-titulo": "Acerca de mí",
        "acerca-descripcion": "Nací en Moca Las Lagunas, República Dominicana, y desde joven me he interesado por la programación. Estoy en desarrollo de mi propia empresa de tecnología y programación.",
        "acerca-detalle": "Mi especialidad es el desarrollo web, aunque también tengo experiencia en aplicaciones móviles y programación de videojuegos.",
        "habilidades-titulo": "Habilidades Principales",
        "skill-web": "Desarrollo Web",
        "skill-mobile": "Aplicaciones Móviles",
        "skill-games": "Videojuegos",
        "skill-db": "Bases de Datos",
        "galeria-titulo": "Galería Personal",
        "cursos-titulo": "Aprende a Programar",
        "cursos-subtitulo": "Cursos diseñados para todos los niveles - Desde principiante hasta avanzado",
        "curso-badge-1": "Principiante",
        "curso-badge-2": "Más Popular",
        "curso-badge-3": "Avanzado",
        "curso-badge-4": "Principiante",
        "curso-badge-5": "Avanzado",
        "curso-badge-6": "Especializado",
        "curso1-titulo": "HTML & CSS Fundamentos",
        "curso1-desc": "Aprende las bases del desarrollo web con HTML y CSS moderno.",
        "curso1-duracion": "⏱️ 4 semanas",
        "curso1-nivel": "👤 Principiante",
        "curso1-precio": "GRATIS",
        "curso2-titulo": "JavaScript Completo",
        "curso2-desc": "Domina JavaScript desde cero hasta conceptos avanzados como Async/Await.",
        "curso2-duracion": "⏱️ 8 semanas",
        "curso2-nivel": "👤 Intermedio",
        "curso2-precio": "GRATIS",
        "curso3-titulo": "React & Hooks",
        "curso3-desc": "Crea aplicaciones web profesionales con React, Hooks y State Management.",
        "curso3-duracion": "⏱️ 10 semanas",
        "curso3-nivel": "👤 Avanzado",
        "curso3-precio": "GRATIS",
        "curso4-titulo": "Python para Principiantes",
        "curso4-desc": "Inicia tu carrera en programación con Python, el lenguaje más fácil de aprender.",
        "curso4-duracion": "⏱️ 6 semanas",
        "curso4-nivel": "👤 Principiante",
        "curso4-precio": "GRATIS",
        "curso5-titulo": "Bases de Datos SQL",
        "curso5-desc": "Domina SQL, bases de datos relacionales y optimización de consultas.",
        "curso5-duracion": "⏱️ 7 semanas",
        "curso5-nivel": "👤 Intermedio",
        "curso5-precio": "GRATIS",
        "curso6-titulo": "Desarrollo de Apps Móviles",
        "curso6-desc": "Crea aplicaciones móviles multiplataforma con React Native y Flutter.",
        "curso6-duracion": "⏱️ 12 semanas",
        "curso6-nivel": "👤 Avanzado",
        "curso6-precio": "GRATIS",
        "cursos-cta-titulo": "¿No estás seguro por dónde empezar?",
        "cursos-cta-desc": "Consulta con nuestros expertos para encontrar el curso perfecto para ti.",
        "btn-consulta": "Agendar Consulta Gratis",
        "portafolio-titulo": "Mis Proyectos",
        "proyecto1-titulo": "XRepot - Empresa",
        "proyecto1-desc": "XRepot es una empresa de tecnología e innovación digital dedicada al desarrollo de soluciones modernas, sistemas inteligentes y proyectos digitales de alto nivel.",
        "proyecto2-titulo": "Mi Portfolio Web",
        "proyecto2-desc": "Sitio web personal con diseño responsivo y animaciones modernas.",
        "proyecto3-titulo": "NONE",
        "proyecto3-desc": "NONE",
        "blog-titulo": "Últimos Artículos",
        "blog1-titulo": "Guía Completa de JavaScript Moderno",
        "blog1-desc": "Aprende los conceptos más importantes de JavaScript ES6+ y cómo aplicarlos en tus proyectos.",
        "blog1-btn": "Leer más →",
        "blog2-titulo": "Mejores Prácticas en Diseño Web Responsivo",
        "blog2-desc": "Descubre las mejores prácticas para crear sitios web que se adapten a cualquier dispositivo.",
        "blog2-btn": "Leer más →",
        "blog3-titulo": "Introducción a React y Sus Componentes",
        "blog3-desc": "Una guía para principiantes sobre cómo comenzar con React y sus conceptos fundamentales.",
        "blog3-btn": "Leer más →",
        "donaciones-titulo": "Apoya mi Proyecto",
        "donaciones-subtitulo": "Ayuda a financiar el desarrollo de XRepot y más proyectos innovadores",
        "donation-goal-titulo": "¿Por qué donar?",
        benefit1: "Apoyo a la innovación tecnológica",
        benefit2: "Desarrollo de nuevas características",
        benefit3: "Acceso prioritario a nuevos proyectos",
        benefit4: "Comunidad exclusiva de donadores",
        "donation-basic-titulo": "Básico",
        "donation-basic-desc": "Apoyo fundamental para el proyecto",
        "donation-standard-titulo": "Estándar",
        "donation-standard-desc": "Acceso a contenido exclusivo",
        "popular-badge": "Popular",
        "donation-premium-titulo": "Premium",
        "donation-premium-desc": "Mención especial + acceso VIP",
        "donation-custom-label": "Monto personalizado:",
        "metodos-pago": "Métodos de donaciones disponibles:",
        "donantes-titulo": "Gracias a Nuestros Donantes",
        "donantes-desc": "Su apoyo hace posible que continúe innovando y creando.",
        "donor-anonymous": "Donante Anónimo",
        "donor-supporter": "Apoyo Comunitario",
        "contacto-titulo": "Ponte en Contacto",
        "email-titulo": "Email",
        "ubicacion-titulo": "Ubicación",
        "redes-titulo": "Redes Sociales",
        "instagram-link": "Instagram",
        "twitter-link": "Twitter",
        "linkedin-link": "LinkedIn",
        "form-nombre": "Tu nombre",
        "form-email": "Tu email",
        "form-mensaje": "Tu mensaje",
        "btn-enviar": "Enviar Mensaje",
        "footer-copyright": "© 2025 Jhanciel F Santana Leon. Todos los derechos reservados.",
        "footer-privacy": "Sobre mi página",
        "footer-terms": "Términos de la visita",
        "legal-back": "← Volver al Inicio",
        "privacy-title": "Sobre mi página (Política de Privacidad)",
        "privacy-update": "Última actualización: 7 de Enero, 2026",
        "privacy-intro1": "Bienvenido a mi biografía personal y portafolio profesional en línea. Esta plataforma digital, meticulosamente desarrollada por Jhanciel F Santana Leon, tiene como propósito fundamental compartir mi trayectoria profesional, exhibir proyectos de innovación tecnológica y difundir conocimientos en el área del desarrollo de software.",
        "privacy-intro2": "La privacidad de mis visitantes es de suma importancia. Esta Política de Privacidad describe con transparencia y detalle cómo se gestiona cualquier interacción o dato generado durante su visita a este sitio web.",
        "privacy-h2-1": "1. Recopilación y Uso de Información Personal",
        "privacy-p-1-1": "Este sitio web opera principalmente como un portal informativo de acceso libre. No se requiere la creación de cuentas de usuario ni procesos de registro para acceder al contenido público.",
        "privacy-p-1-2": "En el caso de que decida establecer comunicación directa a través de correo electrónico, tendré acceso únicamente a la dirección de remitente y el nombre asociado que usted proporcione voluntariamente. Esta información será tratada con estricta confidencialidad y utilizada exclusivamente para responder a su consulta o mantener la correspondencia profesional iniciada.",
        "privacy-h2-2": "2. Transacciones y Donaciones",
        "privacy-p-2-1": "Si decide apoyar mi carrera y desarrollo profesional mediante una donación económica, dicha transacción será procesada íntegramente a través de la plataforma segura de PayPal. En ningún momento tengo acceso, ni almaceno en mis servidores, sus datos financieros sensibles, tales como números de tarjetas de crédito o cuentas bancarias. La seguridad de sus datos financieros está garantizada por los protocolos de encriptación de PayPal.",
        "privacy-h2-3": "3. Tecnologías de Rastreo y Cookies",
        "privacy-p-3-1": "Este sitio utiliza exclusivamente cookies técnicas esenciales o de almacenamiento local ('Local Storage') con el único fin de mejorar su experiencia de usuario. Estas se utilizan para recordar sus preferencias de configuración, específicamente su elección de idioma (Español/Inglés) y el tema visual (Modo Oscuro/Claro), asegurando una navegación consistente en futuras visitas.",
        "privacy-h2-4": "4. Contacto y Consultas",
        "privacy-p-4-1": "Para cualquier duda, aclaración o consulta relacionada con esta Política de Privacidad o las prácticas de este sitio, por favor no dude en contactarme directamente a través del correo electrónico: Jhancielsl@gmail.com",
        "terms-title": "Términos y Condiciones de Uso",
        "terms-intro": "Gracias por visitar mi portafolio profesional y biografía. Al acceder y navegar por este sitio web, usted acepta estar sujeto a los siguientes términos y condiciones, los cuales rigen la relación entre usted (el visitante) y el propietario del sitio (Jhanciel F Santana Leon).",
        "terms-h2-1": "1. Naturaleza y Propósito del Sitio",
        "terms-p-1-1": "Este sitio web ('Portafolio') es una plataforma personal y profesional destinada a la exhibición de habilidades técnicas, proyectos de desarrollo de software y artículos educativos ('Blog'). Todo el contenido tiene fines informativos, educativos y de demostración de capacidades profesionales.",
        "terms-h2-2": "2. Derechos de Propiedad Intelectual",
        "terms-p-2-1": "La totalidad del diseño, código fuente original, gráficos, logotipos, textos y contenido multimedia presentes en este sitio son propiedad intelectual exclusiva de Jhanciel F Santana Leon, salvo que se indique lo contrario. Se autoriza el uso del contenido educativo para fines de aprendizaje personal y no comercial. Queda estrictamente prohibida la reproducción total o parcial del sitio, su redistribución o su presentación como obra propia sin el consentimiento expreso por escrito del autor.",
        "terms-h2-3": "3. Política de Donaciones y Apoyo",
        "terms-p-3-1": "Las donaciones realizadas a través de este sitio son contribuciones puramente voluntarias destinadas a apoyar mi carrera profesional, el mantenimiento del sitio y el desarrollo de futuros proyectos open-source. Al realizar una donación, usted reconoce y acepta expresamente que:",
        "terms-li-3-1": "La donación es un acto de liberalidad y apoyo voluntario al creador.",
        "terms-li-3-2": "Los fondos donados **no son reembolsables** bajo ninguna circunstancia.",
        "terms-li-3-3": "La donación no otorga ningún derecho de propiedad, participación accionaria, o derecho a recibir bienes o servicios de 'XRepot' o Jhanciel F Santana Leon, más allá del agradecimiento del autor.",
        "terms-h2-4": "4. Conducta del Usuario",
        "terms-p-4-1": "Se espera que los visitantes mantengan una conducta respetuosa y profesional. Cualquier intento de dañar la integridad del sitio, o el uso de los canales de contacto para el envío de spam, contenido ofensivo o acoso, está estrictamente prohibido.",
        "terms-h2-5": "5. Contacto Legal",
        "terms-p-5-1": "Si tiene preguntas sobre estos términos de uso, por favor contácteme en: Jhancielsl@gmail.com",
    },
    en: {
        titulo: "JF Santana",
        "inicio-link": "Home",
        "acerca-link": "About",
        "cursos-link": "Courses",
        "portafolio-link": "Portfolio",
        "blog-link": "Blog",
        "donaciones-link": "Donate",
        "contacto-link": "Contact",
        bienvenido: "Welcome to My World",
        descripcion: "I'm Jhanciel F Santana Leon, Passionate Web Developer",
        "btn-contacto": "Contact Me",
        "btn-portafolio": "View Portfolio",
        "acerca-titulo": "About Me",
        "acerca-descripcion": "I was born in Moca Las Lagunas, Dominican Republic, and from a young age I have been interested in programming. I'm developing my own technology and programming company.",
        "acerca-detalle": "My specialty is web development, although I also have experience in mobile applications and video game programming.",
        "habilidades-titulo": "Main Skills",
        "skill-web": "Web Development",
        "skill-mobile": "Mobile Applications",
        "skill-games": "Video Games",
        "skill-db": "Databases",
        "galeria-titulo": "Personal Gallery",
        "cursos-titulo": "Learn to Program",
        "cursos-subtitulo": "Courses designed for all levels - From beginner to advanced",
        "curso-badge-1": "Beginner",
        "curso-badge-2": "Most Popular",
        "curso-badge-3": "Advanced",
        "curso-badge-4": "Beginner",
        "curso-badge-5": "Advanced",
        "curso-badge-6": "Specialized",
        "curso1-titulo": "HTML & CSS Fundamentals",
        "curso1-desc": "Learn the basics of web development with modern HTML and CSS.",
        "curso1-duracion": "⏱️ 4 weeks",
        "curso1-nivel": "👤 Beginner",
        "curso1-precio": "FREE",
        "curso2-titulo": "Complete JavaScript",
        "curso2-desc": "Master JavaScript from zero to advanced concepts like Async/Await.",
        "curso2-duracion": "⏱️ 8 weeks",
        "curso2-nivel": "👤 Intermediate",
        "curso2-precio": "FREE",
        "curso3-titulo": "React & Hooks",
        "curso3-desc": "Create professional web applications with React, Hooks and State Management.",
        "curso3-duracion": "⏱️ 10 weeks",
        "curso3-nivel": "👤 Advanced",
        "curso3-precio": "FREE",
        "curso4-titulo": "Python for Beginners",
        "curso4-desc": "Start your programming career with Python, the easiest language to learn.",
        "curso4-duracion": "⏱️ 6 weeks",
        "curso4-nivel": "👤 Beginner",
        "curso4-precio": "FREE",
        "curso5-titulo": "SQL Databases",
        "curso5-desc": "Master SQL, relational databases and query optimization.",
        "curso5-duracion": "⏱️ 7 weeks",
        "curso5-nivel": "👤 Intermediate",
        "curso5-precio": "FREE",
        "curso6-titulo": "Mobile App Development",
        "curso6-desc": "Create cross-platform mobile applications with React Native and Flutter.",
        "curso6-duracion": "⏱️ 12 weeks",
        "curso6-nivel": "👤 Advanced",
        "curso6-precio": "FREE",
        "cursos-cta-titulo": "Not sure where to start?",
        "cursos-cta-desc": "Consult with our experts to find the perfect course for you.",
        "btn-consulta": "Schedule Free Consultation",
        "portafolio-titulo": "My Projects",
        "proyecto1-titulo": "XRepot - Company",
        "proyecto1-desc": "XRepot is a technology and digital innovation company dedicated to developing modern solutions, intelligent systems, and high-level digital projects.",
        "proyecto2-titulo": "My Portfolio Website",
        "proyecto2-desc": "Personal website with responsive design and modern animations.",
        "proyecto3-titulo": "NONE",
        "proyecto3-desc": "NONE",
        "blog-titulo": "Latest Articles",
        "blog1-titulo": "Complete Guide to Modern JavaScript",
        "blog1-desc": "Learn the most important concepts of JavaScript ES6+ and how to apply them in your projects.",
        "blog1-btn": "Read more →",
        "blog2-titulo": "Best Practices in Responsive Web Design",
        "blog2-desc": "Discover best practices for creating websites that adapt to any device.",
        "blog2-btn": "Read more →",
        "blog3-titulo": "Introduction to React and Its Components",
        "blog3-desc": "A beginner's guide on how to get started with React and its fundamental concepts.",
        "blog3-btn": "Read more →",
        "donaciones-titulo": "Support My Project",
        "donaciones-subtitulo": "Help fund the development of JComments and more innovative projects",
        "donation-goal-titulo": "Why Donate?",
        benefit1: "Support for technological innovation",
        benefit2: "Development of new features",
        benefit3: "Priority access to new projects",
        benefit4: "Exclusive donor community",
        "donation-basic-titulo": "Basic",
        "donation-basic-desc": "Fundamental support for the project",
        "donation-standard-titulo": "Standard",
        "donation-standard-desc": "Access to exclusive content",
        "popular-badge": "Popular",
        "donation-premium-titulo": "Premium",
        "donation-premium-desc": "Special mention + VIP access",
        "donation-custom-label": "Custom amount:",
        "metodos-pago": "Available donation methods:",
        "donantes-titulo": "Thanks to Our Donors",
        "donantes-desc": "Your support makes it possible for me to continue innovating and creating.",
        "donor-anonymous": "Anonymous Donor",
        "donor-supporter": "Community Support",
        "contacto-titulo": "Get In Touch",
        "email-titulo": "Email",
        "ubicacion-titulo": "Location",
        "redes-titulo": "Social Media",
        "instagram-link": "Instagram",
        "twitter-link": "Twitter",
        "linkedin-link": "LinkedIn",
        "form-nombre": "Your name",
        "form-email": "Your email",
        "form-mensaje": "Your message",
        "btn-enviar": "Send Message",
        "footer-copyright": "© 2025 Jhanciel F Santana Leon. All rights reserved.",
        "footer-privacy": "About my page",
        "footer-terms": "Visit Terms",
        "legal-back": "← Back to Home",
        "privacy-title": "About this page (Privacy Policy)",
        "privacy-update": "Last updated: January 7, 2026",
        "privacy-intro1": "Welcome to my personal biography and professional portfolio online. This digital platform, meticulously developed by Jhanciel F Santana Leon, has the fundamental purpose of sharing my professional career, exhibiting technological innovation projects, and disseminating knowledge in the area of software development.",
        "privacy-intro2": "The privacy of my visitors is of utmost importance. This Privacy Policy describes with transparency and detail how any interaction or data generated during your visit to this website is managed.",
        "privacy-h2-1": "1. Collection and Use of Personal Information",
        "privacy-p-1-1": "This website operates primarily as an open-access informational portal. The creation of user accounts or registration processes is not required to access public content.",
        "privacy-p-1-2": "In the event that you decide to establish direct communication via email, I will only have access to the sender address and name you voluntarily provide. This information will be treated with strict confidentiality and used exclusively to respond to your inquiry or maintain the initiated professional correspondence.",
        "privacy-h2-2": "2. Transactions and Donations",
        "privacy-p-2-1": "If you decide to support my career and professional development through a financial donation, said transaction will be processed entirely through the secure PayPal platform. At no time do I have access to, nor do I store on my servers, your sensitive financial data, such as credit card numbers or bank accounts. The security of your financial data is guaranteed by PayPal's encryption protocols.",
        "privacy-h2-3": "3. Tracking Technologies and Cookies",
        "privacy-p-3-1": "This site uses exclusively essential technical cookies or 'Local Storage' solely to improve your user experience. These are used to remember your setting preferences, specifically your language choice (Spanish/English) and visual theme (Dark/Light Mode), ensuring consistent navigation in future visits.",
        "privacy-h2-4": "4. Contact and Inquiries",
        "privacy-p-4-1": "For any questions, clarifications, or inquiries related to this Privacy Policy or the practices of this site, please do not hesitate to contact me directly via email: Jhancielsl@gmail.com",
        "terms-title": "Terms and Conditions of Use",
        "terms-intro": "Thank you for visiting my professional portfolio and biography. By accessing and browsing this website, you agree to be bound by the following terms and conditions, which govern the relationship between you (the visitor) and the site owner (Jhanciel F Santana Leon).",
        "terms-h2-1": "1. Nature and Purpose of the Site",
        "terms-p-1-1": "This website ('Portfolio') is a personal and professional platform intended for the exhibition of technical skills, software development projects, and educational articles ('Blog'). All content is for informational, educational, and professional capability demonstration purposes.",
        "terms-h2-2": "2. Intellectual Property Rights",
        "terms-p-2-1": "The entire design, original source code, graphics, logos, texts, and multimedia content present on this site are the exclusive intellectual property of Jhanciel F Santana Leon, unless otherwise indicated. The use of educational content for personal and non-commercial learning purposes is authorized. The total or partial reproduction of the site, its redistribution, or its presentation as one's own work without the express written consent of the author is strictly prohibited.",
        "terms-h2-3": "3. Donation and Support Policy",
        "terms-p-3-1": "Donations made through this site are purely voluntary contributions intended to support my career professional, site maintenance, and the development of future open-source projects. By making a donation, you expressly acknowledge and accept that:",
        "terms-li-3-1": "The donation is an act of liberality and voluntary support to the creator.",
        "terms-li-3-2": "The donated funds are **non-refundable** under any circumstances.",
        "terms-li-3-3": "The donation does not grant any ownership rights, equity participation, or right to receive goods or services from 'XRepot' or Jhanciel F Santana Leon, beyond the author's gratitude.",
        "terms-h2-4": "4. User Conduct",
        "terms-p-4-1": "Visitors are expected to maintain respectful and professional conduct. Any attempt to damage the integrity of the site, or the use of contact channels for sending spam, offensive content, or harassment, is strictly prohibited.",
        "terms-h2-5": "5. Legal Contact",
        "terms-p-5-1": "If you have questions about these terms of use, please contact me at: Jhancielsl@gmail.com",
    }
};

function cambiarIdioma() {
    const idioma = document.getElementById("idioma").value;
    const currentTranslations = translations[idioma];

    // Actualizar todos los elementos con el nuevo idioma
    for (const [key, value] of Object.entries(currentTranslations)) {
        const element = document.getElementById(key);
        if (element) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = value;
            } else {
                element.textContent = value;
            }
        }
    }

    // Guardar preferencia de idioma
    localStorage.setItem('idioma', idioma);
}

// Cargar idioma guardado al iniciar o detectar automáticamente
window.addEventListener('load', () => {
    const idiomaGuardado = localStorage.getItem('idioma');
    if (idiomaGuardado) {
        document.getElementById('idioma').value = idiomaGuardado;
        cambiarIdioma();
    } else {
        // Detectar idioma automáticamente la primera vez
        detectarIdiomaAutomatico();
    }
});

// ==================== PROCESAMIENTO DE DONACIONES CON PAYPAL ====================

// IMPORTANTE: Reemplaza estos valores con tu información real de PayPal
const PAYPAL_CLIENT_ID = 'TU_PAYPAL_CLIENT_ID';
const PAYPAL_EMAIL = 'jhancielsl@gmail.com'; // Tu email de PayPal
const PAYPAL_SANDBOX = true; // Cambiar a false en producción


function donateWithPayPal(cantidad) {
    const urlPayPal = construirURLPayPal(cantidad);
    window.open(urlPayPal, '_blank');

}

// ==================== TEMA OSCURO ====================
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');

    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Apply theme on load
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    // Toggle event
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
}


function construirURLPayPal(cantidad) {
    const sandbox = PAYPAL_SANDBOX ? 'sandbox.' : '';
    const baseURL = `https://www.${sandbox}paypal.com/cgi-bin/webscr`;

    const params = new URLSearchParams({
        cmd: '_xclick',
        business: PAYPAL_EMAIL,
        item_name: 'Donación - XRepot',
        amount: cantidad.toFixed(2),
        currency_code: 'USD',
        return: window.location.href,
        cancel_return: window.location.href,
        notify_url: 'https://tu-sitio.com/paypal-notify'
    });

    return `${baseURL}?${params.toString()}`;
}


document.addEventListener("DOMContentLoaded", function () {
    cambiarIdioma();
    initTheme();

    // Footer Reveal on Scroll
    const footer = document.getElementById('footer');

    window.addEventListener('scroll', () => {
        // Calcular si estamos en el fondo de la página (con un pequeño margen de error)
        if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
            footer.classList.add('footer-visible');
        } else {
            footer.classList.remove('footer-visible');
        }
    });
});
