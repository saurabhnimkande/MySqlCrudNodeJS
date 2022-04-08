const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test_database",
  multipleStatements: true,
});

connection.connect((error) => {
  if (error) throw error;

  console.log("database connected successfuly");
});

module.exports = connection;
