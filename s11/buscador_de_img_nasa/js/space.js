// const url = "https://images-api.nasa.gov/search"
const input = document.getElementById("inputBuscar");
const btn = document.getElementById("btnBuscar");
const container = document.getElementById("item-container");

const addHTMLItems = (arr) => {
  container.innerHTML = "";
  arr.forEach((item) => {
    const data = item.data[0];
    const imgUrl = item.links?.[0].href;
    container.innerHTML += `
    <div class="item">
      ${
        imgUrl &&
        `
        <div class="img-outer-container">
          <div class="img-inner-container">
            <img src=${imgUrl} alt=${data.title} class="item-img" >
          </div>
        </div>
        `
      }
      <div class="item-text-container">
        <h4>${data.title}</h4>
        <div class="item-desc">
          <p>${data.description}</p>
        </div>
        <p>${data.date_created}</p>
      </div>
    </div>
    `;
  });
};

btn.addEventListener("click", async (e) => {
  const url = new URL("https://images-api.nasa.gov/search");
  url.searchParams.append("q", input.value);

  const res = await fetch(url);
  const data = await res.json();
  addHTMLItems(data.collection.items);
});
