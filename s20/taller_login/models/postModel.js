const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "blog",
  connectionLimit: 5,
});

const getPosts = async (id) => {
  let conn;
  try {
    conn = await pool.getConnection();
    let rows;
    if (id) {
      rows = await conn.query("SELECT * FROM posts WHERE id=?", [id]);
      return rows[0];
    } else {
      rows = await conn.query("SELECT * FROM posts");
      return rows;
    }
  } catch (error) {
    console.log(error);
  } finally {
    if (conn) conn.release(); //release to pool
  }

  return false;
};

const createPost = async (post) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const response = await conn.query(
      "INSERT INTO posts(title, body, created_at, updated_at) VALUE(?, ?, ?, ?)",
      [
        post.title,
        post.body,
        new Date().toISOString().slice(0, 19).replace("T", " "),
        new Date().toISOString().slice(0, 19).replace("T", " "),
      ]
    );

    return { id: parseInt(response.insertId), ...post };
  } catch (error) {
    console.log(error);
  } finally {
    if (conn) conn.release(); //release to pool
  }

  return false;
};

const deletePost = async (id) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const response = await conn.query("DELETE FROM posts WHERE id=?", [id]);

    return response;
  } catch (error) {
    console.log(error);
  } finally {
    if (conn) conn.release(); //release to pool
  }

  return false;
};

const updatePost = async (id, post) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const response = await conn.query(
      "UPDATE posts SET title=?, body=?, updated_at=? WHERE id=?",
      [
        post.title,
        post.body,
        new Date().toISOString().slice(0, 19).replace("T", " "),
        id,
      ]
    );

    return { id: parseInt(id), ...post };
  } catch (error) {
    console.log(error);
  } finally {
    if (conn) conn.release(); //release to pool
  }

  return false;
};

module.exports = {
  getPosts,
  createPost,
  deletePost,
  updatePost,
};
