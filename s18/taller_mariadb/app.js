const express = require("express"); // Importa ExpressJS. Más info de Express en =>https://expressjs.com/es/starter/hello-world.html
const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "planning",
  connectionLimit: 5,
});

const app = express(); // Crea una instancia de ExpressJS
const port = 3000;

app.use(express.json()); // Permite que el servidor analice el cuerpo de las peticiones como JSON

app.get("/", (req, res) => {
  res.send("<h1>Welcome.</h1>");
});

app.get("/todos", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM todo");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Server failed" });
  } finally {
    if (conn) conn.release(); //release to pool
  }
});

app.get("/todos/:id", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM todo WHERE id=?", [
      req.params.id,
    ]);
    if (rows.length == 0) {
      throw new Error("Element not found.");
    }
    res.json(rows[0]);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Element not found." });
  } finally {
    if (conn) conn.release(); //release to pool
  }
});

app.post("/todos", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const response = await conn.query(
      "INSERT INTO todo(name, description, created_at, updated_at, status) VALUE(?, ?, ?, ?, ?)",
      [
        req.body.name,
        req.body.description,
        new Date().toISOString().slice(0, 19).replace("T", " "),
        new Date().toISOString().slice(0, 19).replace("T", " "),
        req.body.status,
      ]
    );
    res.json({ id: parseInt(response.insertId), ...req.body });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server failed" });
  } finally {
    if (conn) conn.release(); //release to pool
  }
});

app.delete("/todos/:id", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const response = await conn.query("DELETE FROM todo WHERE id=?", [
      req.params.id,
    ]);
    res.status(204).json({});
  } catch (error) {
    res.status(500).json({ message: "Server failed" });
  } finally {
    if (conn) conn.release(); //release to pool
  }
});

app.put("/todos/:id", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const response = await conn.query(
      "UPDATE todo SET name=?, description=?, updated_at=?, status=? WHERE id=?",
      [
        req.body.name,
        req.body.description,
        new Date().toISOString().slice(0, 19).replace("T", " "),
        req.body.status,
        req.params.id,
      ]
    );

    res.json({ id: parseInt(response.insertId), ...req.body });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server failed" });
  } finally {
    if (conn) conn.release(); //release to pool
  }
});

// Esta línea inicia el servidor para que escuche peticiones en el puerto indicado
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
