const dataElem = document.getElementById("data");

JSON.parse(localStorage.getItem("dataArr")).forEach(
  (data) => (dataElem.textContent += `${data}`)
);
