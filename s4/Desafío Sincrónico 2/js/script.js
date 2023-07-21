const DATA = [
  { name: "Juan", lastname: "Perez" },
  { name: "Roberto", lastname: "Carlos" },
  { name: "Fulano", lastname: "Detal" },
  { name: "Gian", lastname: "Laic" },
  { name: "Fernando", lastname: "Saavedra" },
];

// Escribe el código necesario aquí
// const div = document.getElementById("container");
// const listado = function (persona) {
//   const parrafo = document.createElement("p");
//   parrafo.innerHTML = persona.name + " " + persona.lastname;
//   div.appendChild(parrafo);
// };
// DATA.forEach(listado);

// const div = document.getElementById("container");
// let codigo = "";
// for (let i = 0; i < DATA.length; i++) {
//   codigo += "<p>" + DATA[i].name + " " + DATA[i].lastname + "</p>";
// }
// div.innerHTML = codigo;

const div = document.getElementById("container");
let codigo = "";
DATA.forEach(function (p) {
  codigo += "<p>" + p.name + " " + p.lastname + "</p>";
});
div.innerHTML = codigo;
