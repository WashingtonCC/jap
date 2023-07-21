document.addEventListener("DOMContentLoaded", function () {
  // Escribe el código necesario aquí
  let btn = document.getElementById("highlightBtn");
  let paragraph = document.getElementById("lorem");

  function resaltar() {
    paragraph.classList.toggle("highlight");
  }

  btn.addEventListener("click", resaltar);
  //
});
