const addBtn = document.getElementById("agregar");
const input = document.getElementById("item");
const container = document.getElementById("contenedor");
const clearBtn = document.getElementById("limpiar");

const showContent = () => {
  container.innerHTML = "";
  const data = JSON.parse(localStorage.getItem("data"));

  if (data) {
    data.forEach((d) => {
      container.innerHTML += `<li>${d}</li>`;
    });
  }
};

showContent();

addBtn.addEventListener("click", (e) => {
  const data = JSON.parse(localStorage.getItem("data"));

  if (!data) {
    localStorage.setItem("data", JSON.stringify([input.value]));
  } else {
    localStorage.setItem("data", JSON.stringify([...data, input.value]));
  }

  input.value = "";
  showContent();
});

clearBtn.addEventListener("click", (e) => {
  localStorage.clear();
  showContent();
});
