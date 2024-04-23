const { AppDataSource }= require("./dataSource");

const createUser = async (nickname, email, password) => {
  try {
    const result = await AppDataSource.query(
      `
        INSERT INTO users (
          nickname, 
          email, 
          password
          ) VALUES (
          ?,
          ?,
          ?
        )
      `,
      [nickname, email, password]
    );
    return result;
  } catch{
    const eroor = new Error("dataSource Error");
    eroor.statusCode = 400;
    console.log(eroor);
    throw eroor;
  }
};

const getUserByEmail = async (email) => {
  try {
    const [result] = await AppDataSource.query(
      `
        SELECT
          id,
          nickname,
          email,
          password
        FROM users
        WHERE email = ?
      `,
      [email]
    );
    return result;
  } catch {
    const error = new Error("dataSource Error email");
    error.statusCode = 400;

    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const [result] = await AppDataSource.query(
      `
        SELECT 
          id,
          nickname,
          email,
          password
          FROM users
          WHERE id = ?
      `,
      [id]
    );
    
    return result;
  } catch {
    const error = new Error('dataSource Error id');
    error.statusCode = 400;

    throw error;
  }
};

module.exports = { createUser,  getUserByEmail,  getUserById };
