let productos = [];
const url = "api/productos.json";

// Variante de función getJSONData. Estaban utilizando fetch en crudo, por eso
//animé a reutilizar código.
let obtener = (url) => {
  var resultado = {};
  return fetch(url)
    .then((respuesta) => {
      if (respuesta.ok) {
        return respuesta.json();
      } else {
        throw Error(respuesta.statusText);
      }
    })
    .then((respuesta) => {
      resultado.status = "ok";
      resultado.data = respuesta;

      return resultado;
    })
    .catch((error) => {
      resultado.status = "error";
      resultado.data = error;

      return resultado;
    });
};
//Función que carga los productos a la lista desplegable
function cargarProductos(listaProductos) {
  let producto = document.getElementById("producto");
  for (let elemento of listaProductos) {
    producto.innerHTML += `<option value= ${elemento.producto} -  ${elemento.precio}>${elemento.producto} -  ${elemento.precio} </option>`;
  }
}
function recalcular() {
  let cantidades = document.getElementsByClassName("cant");
  let precios = document.getElementsByClassName("precio");
  let resultados = document.getElementsByClassName("res");
  var total = 0;
  console.log("Total es: " + typeof total);
  for (let i = 0; i < precios.length; i++) {
    total += parseFloat(
      parseFloat(cantidades[i].value) * parseFloat(precios[i].innerHTML)
    );

    resultados[i].innerHTML = parseFloat(
      parseFloat(cantidades[i].value) * parseFloat(precios[i].innerHTML)
    ).toFixed(2);
    console.log("Peero el programa dice que total ahora es: " + typeof total);
  }
  console.log("Total ahora es:" + typeof total);
  document.getElementById("total").innerHTML = "$ " + total.toFixed(2);
}
function agregarALista() {
  let cant = parseInt(document.getElementById("cantidad").value);
  let lista = document.getElementById("lista"); //tomo el tbody
  let index = document.getElementById("producto").selectedIndex; //tomo el índice
  //del producto seleccionado.
  lista.innerHTML += `<tr><td>${
    productos[index].producto
  } </td><td>$ <span class="precio">${
    productos[index].precio
  }</span></td><td><input type="number" class="form-control cant" value="${cant}" onchange="recalcular();" ></td><td>$ <span class="res">${(
    cant * productos[index].precio
  ).toFixed(
    2
  )}</span></td><td><img src="/img/borrar.png" width="20"><span></td></tr>`;
  recalcular();
}

function imprimirTicket() {
  let doc = new jsPDF();

  doc.setFontSize(20);
  doc.text(60, 20, 'Ferretería "267"');
  doc.line(10, 25, 200, 25);

  /*Completar */

  doc.save(cliente + ".pdf");
}

document.addEventListener("DOMContentLoaded", () => {
  obtener(url).then((resultado) => {
    //Agrego los productos a la lista
    if (resultado.status === "ok") {
      console.log(resultado.data);
      productos = resultado.data;
      cargarProductos(productos);
      console.log(productos);
    }
  });
  let btnAgregar = document.getElementById("agregar");
  btnAgregar.addEventListener("click", () => {
    agregarALista();
    //alert( document.getElementById('producto').selectedIndex);
  });

  let btnImprimir = document.getElementById("imp");
  btnImprimir.addEventListener("click", () => {
    imprimirTicket();
  });
});
