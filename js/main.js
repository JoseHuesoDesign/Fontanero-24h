const menuHamburguesa = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.nav-menu');

menuHamburguesa.addEventListener('click', function() {
    navMenu.classList.toggle('active');
} )

// 1. Seleccionamos el contenedor del aviso en el DOM
const avisoUrgencia = document.querySelector('#aviso-urgencia');

// 2. Creamos un objeto con la fecha/hora actual del aviso
const fechaActual = new Date();
const diaSemana = fechaActual.getDay();
const horaActual = fechaActual.getHours();

// Definimos si es horario comercial
// El dia laborable es de lunes (1) a viernes (5)
const esDiaLaboral = diaSemana >= 1 && diaSemana <= 5;
const esHoraComercial = horaActual >= 9 && horaActual < 18;

// 3. Condicional para decidir qué mensaje mostrar
if (esDiaLaboral && esHoraComercial) {
    avisoUrgencia.textContent = "🟢 Técnicos disponibles en tu zona. ¡Llámanos!";
    avisoUrgencia.style.color = "#16a34a";
} else {
    avisoUrgencia.textContent = "🚨 ¡Servicio de Urgencias 24h Activo! Atendiendo ahora mismo.";
    avisoUrgencia.style.color = "#dc2626";
}