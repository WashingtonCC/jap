const express = require("express"); // Importa ExpressJS. Más info de Express en =>https://expressjs.com/es/starter/hello-world.html
const cors = require("cors");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "SECRET KEY";

const app = express(); // Crea una instancia de ExpressJS
const port = 3000;

const postController = require("./controllers/postController");
const postRouter = require("./routes/postRoute");

app.use(express.json()); // Permite que el servidor analice el cuerpo de las peticiones como JSON
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("<h1>Welcome.</h1>");
});

app.use("/posts", (req, res, next) => {
  try {
    const decoded = jwt.verify(req.headers["access-token"], SECRET_KEY);
    console.log(decoded);
    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized user" });
  }
});

app.use("/posts", postRouter);

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "admin") {
    const token = jwt.sign({ username }, SECRET_KEY);
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: "Wrong username/password" });
  }
});

// Esta línea inicia el servidor para que escuche peticiones en el puerto indicado
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
