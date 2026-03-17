import pool from "../../../config/db.js";

// get user by id
export const findById = async (id) => {
  const result = await pool.query(
    "SELECT * FROM users WHERE id = $1",
    [id]
  );
  return result.rows[0];
};

// update user
export const update = async (id, data) => {
  const fields = Object.keys(data);
  const values = Object.values(data);

  const setQuery = fields
    .map((field, index) => `${field} = $${index + 1}`)
    .join(", ");

  const query = `
    UPDATE users
    SET ${setQuery}
    WHERE id = $${fields.length + 1}
    RETURNING *;
  `;

  const result = await pool.query(query, [...values, id]);
  return result.rows[0];
};

// delete user
export const deleteById = async (id) => {
  await pool.query("DELETE FROM users WHERE id = $1", [id]);
};

// update password
export const updatePassword = async (id, password) => {
    const result = await pool.query(
        "UPDATE users SET password = $1 WHERE id = $2 RETURNING *",
        [password, id]
    );
    return result.rows[0];
};