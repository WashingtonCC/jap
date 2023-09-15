const URL = "https://fakestoreapi.com/products";
const container = document.getElementsByClassName("container")[0];

document.addEventListener("DOMContentLoaded", async function (e) {
  data = await fetchData(URL);
  showProducts(data);
});

async function fetchData(url) {
  /*Función asincrónica que realiza una solicitud a una URL utilizando la función fetch() y await.
  Si ocurre algún error lo captura y lo registra en la consola. 
  Si no hay errores devuelve el array de productos obtenido.*/
  try {
    /* Hacer fetch y devolver array de productos (recordar usar await) */
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    // Log de eventual error
    console.log(error);
  }
}

function showProducts(productsData) {
  /*Función para mostrar productos en el div con id="products".
  Debe usar la función stars(), cutString() y getCurrentDateTime() para lograrlo */
  productsData.forEach((p) => {
    container.innerHTML += `
    <div>
                    <br>
                    <p>${cutString(p.title, 20)}</p>
                    <p>${getCurrentDateTime()} - ${stars(p.rating.rate)}</p> 
                </div>
    `;
  });
}

function stars(cantidadStars) {
  /*Función que toma como entrada un número cantidadStars y devuelve 
  el html correspondiente a cinco estrellas con cantidadStars rellenas
  y el resto vacías */
  const html = `
  <div>
    <span class="fa fa-star ${cantidadStars >= 1 && "checked"}"></span>
    <span class="fa fa-star ${cantidadStars >= 2 && "checked"}"></span>
    <span class="fa fa-star ${cantidadStars >= 3 && "checked"}"></span>
    <span class="fa fa-star ${cantidadStars >= 4 && "checked"}"></span>
    <span class="fa fa-star ${cantidadStars == 5 && "checked"}"></span> </p>
  </div>
  `;

  return html;
}

function cutString(string, max) {
  /*Función que toma como entrada un string y y un número máximo de caracteres,
     y devuelve la cadena truncada a esa longitud si es más larga,
     seguida de tres puntos suspensivos ("...").*/
  let newString = "";

  if (string.length > max) {
    newString = string.slice(0, max).trimEnd();
    newString += "...";
  } else {
    newString = string;
  }

  return newString;
}

function getCurrentDateTime() {
  /*función devuelve la fecha y hora actuales 
  en una string legible por humanos.*/
  return new Date().toLocaleString();
}

console.log(getCurrentDateTime());
