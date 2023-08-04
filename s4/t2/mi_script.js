document.addEventListener("DOMContentLoaded", function () {
  // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces de la página :
  const info = document.getElementById("info");
  const links = Array.from(document.getElementsByTagName("a"));
  info.innerHTML += links.length;
  // Incluye aquí el código necesario para mostrar en el párrafo "info", la dirección del penúltimo enlace de la página :
  info.innerHTML += "-" + links[links.length - 2].href;
  // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces que apuntan a http://prueba/ :
  const linksToPruebaCount = links.reduce(
    (count, link) => (link.href.includes("http://prueba/") ? count + 1 : count),
    0
  );
  info.innerHTML += "-" + linksToPruebaCount;
  // Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces del tercer párrafo :
  const paragraphs = document.getElementsByTagName("p");
  const aCount = Array.from(paragraphs[2].children).reduce(
    (count, child) => (child.tagName.toLowerCase() === "a" ? count + 1 : count),
    0
  );
  info.innerHTML += "-" + aCount;
});
