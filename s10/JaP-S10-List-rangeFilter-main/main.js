const URL = "https://fakestoreapi.com/products";
const container = document.getElementById("info");
let products;
let filteredProducts;

const showProducts = (products) => {
  container.innerHTML = "";

  products.forEach((p) => {
    container.innerHTML += `
      <div class="list-group-item list-group-item-action cursor-active"> 
          <h4>${p.title}</h4> 
          <small class="text-muted">${p.price}</small> 
      </div> 
    `;
  });
};

document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch(URL);
  const products = await res.json();
  showProducts(products);

  document.getElementById("rangeFilterCount").addEventListener("click", () => {
    let min = document.getElementById("rangeFilterCountMin").value;
    let max = document.getElementById("rangeFilterCountMax").value;

    filteredProducts = products.filter(
      (product) => product.price >= min && product.price <= max
    );
    showProducts(filteredProducts);
  });

  document.getElementById("clearRangeFilter").addEventListener("click", () => {
    showProducts(products);
    filteredProducts = products.slice();
  });
});
