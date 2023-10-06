const url = "https://japceibal.github.io/japflix_api/movies-data.json";
const input = document.getElementById("inputBuscar");
const btn = document.getElementById("btnBuscar");
const container = document.getElementById("lista");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    function showMovieOverlay(e) {
      const movie = data.find((m) => m.id == e.target.id);
      console.log(movie);
    }

    btn.addEventListener("click", () => {
      console.log("a");
      let query = input.value;
      query = query.toLowerCase();
      if (query.replace("/s/g", "") != "") {
        const filteredMovies = data.filter(
          (movie) =>
            movie.title.toLowerCase() == query ||
            movie.tagline.toLowerCase() == query ||
            movie.overview.toLowerCase() == query ||
            movie.genres.some((genre) => genre.name.toLowerCase() == query)
        );
        container.innerHTML = "";

        filteredMovies.forEach((movie) => {
          const listItem = document.createElement("li");
          listItem.id = movie.id;
          listItem.classList.add("list-group-item");
          listItem.setAttribute("data-bs-toggle", "offcanvas");
          listItem.setAttribute("data-bs-target", "#offcanvasTop");
          listItem.setAttribute("aria-controls", "offcanvasTop");
          listItem.addEventListener("click", showMovieOverlay);
          listItem.innerHTML = movie.title;
          container.appendChild(listItem);
        });
      } else {
        alert("Query is empty");
      }
    });
  });
