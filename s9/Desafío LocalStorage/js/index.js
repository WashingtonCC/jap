const btn = document.getElementById("buttonText");
const input = document.getElementById("inputText");

// btn.addEventListener("click", (e) => {
//   localStorage.setItem("data", input.value);
// });

btn.addEventListener("click", (e) => {
  const storedDataArr = localStorage.getItem("dataArr");

  if (!storedDataArr) {
    localStorage.setItem("dataArr", JSON.stringify([input.value]));
  } else {
    localStorage.setItem(
      "dataArr",
      JSON.stringify([...JSON.parse(storedDataArr), input.value])
    );
  }
});
