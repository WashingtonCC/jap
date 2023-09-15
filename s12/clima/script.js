const url = "https://api.openweathermap.org/data/3.0/onecall";
const apiKey = "adc1a7ab113a271eb5321ba6d03d6106";

const getData = async () => {
  const res = await fetch(url + `?lat=90&lon=90&appid=${apiKey}`);
  const data = await res.json();
  console.log(data);
};

getData();
