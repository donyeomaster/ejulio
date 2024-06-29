// Script barra de navegación

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

/*
 // abrir pagina detalle

document.addEventListener('DOMContentLoaded', function() {
  const productoElement = document.getElementById('producto');
  if (productoElement) {
    productoElement.addEventListener('click', () => {
      window.location.href = '../pages/sproduct.html';
    });
  }
}); 
*/

//mostrar otras alternativas del mismo producto
