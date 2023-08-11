const carCategoryUrl =
  "https://japceibal.github.io/emercado-api/cats_products/101.json";

const showProducts = () => {
  getJSONData(carCategoryUrl).then((res) => {
    if (res.status == "ok") {
      res.data.products.forEach((product) => {});
      console.log(res.data);
    }
  });
};

showProducts();
