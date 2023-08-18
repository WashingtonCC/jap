function fetchData(url) {
  //completar funcion de fetch
  // Realizar la solicitud fetch al archivo JSON
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.error("Error al cargar el archivo JSON:", error);
    });
}

function validarMayorUruguay(personas) {
  //validar que las personas sean mayores y uruguayas.
  // devuelve array de personas que cumplan el requisito
  const personasFiltradas = personas.filter(
    (person) => person.edad >= 18 && person.pais === "Uruguay"
  );

  return personasFiltradas;
}

document.getElementById("regBtn").addEventListener("click", async function () {
  //completar
  try {
    const personasJson = await fetchData("json/personas.json"); /*completar*/ // Busca personas .Espera a que se resuelva la promesa
    console.log(" PERSONAS:");
    console.log(personasJson);

    const personasFiltradas = validarMayorUruguay(personasJson);
    console.log(" FILTRADAS: ");
    console.log(personasFiltradas);

    const categoriasTrabajosJson = await fetchData("json/cats.json"); // Busca categorias .Espera a que se resuelva la promesa
    console.log(" Trabajos:");
    console.log(categoriasTrabajosJson);
  } catch (error) {
    console.error("Error:", error);
  }
});
