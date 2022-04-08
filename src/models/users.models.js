const dbConnect = require("../config/db.config");

const User = (user) => {
  this.id = user.id;
  this.first_name = user.first_name;
  this.last_name = user.last_name;
  this.email = user.email;
  this.gender = user.gender;
  this.ip_address = user.ip_address;
};

User.getAllUsers = (result) => {
  dbConnect.query("SELECT * from table1", (err, res) => {
    if (err) {
      console.log("error");
      result(null, err);
    } else {
      console.log("data fetched successfully");
      result(null, res);
    }
  });
};

User.postUserData = (body, result) => {
  dbConnect.query(
    `INSERT INTO table1 SET ? ;
     INSERT INTO table2 SET ? ; 
     INSERT INTO table3 SET ? ; 
     INSERT INTO table4 SET ? ; 
     INSERT INTO table5 SET ? ; `,
    [body, body, body, body, body],
    (err, res) => {
      if (err) {
        console.log(err, "false");
        result(null, err);
      } else {
        console.log(res);
        result(null, res);
      }
    }
  );
};

User.getUserById = (id, result) => {
  dbConnect.query("SELECT * FROM table1 WHERE id=?", [id], (err, res) => {
    if (err) {
      console.log(err, "false");
      result(null, err);
    } else {
      console.log(res);
      result(null, res);
    }
  });
};

User.deleteUserByid = (id, result) => {
  dbConnect.query("DELETE FROM table1 WHERE id=?;", [id], (err, res) => {
    if (err) {
      console.log(err, "false");
      result(null, err);
    } else {
      console.log(res);
      result(null, res);
    }
  });
};

User.updateDataById = (body, id, result) => {
  dbConnect.query("UPDATE table1 SET ? WHERE id=?;", [body, id], (err, res) => {
    if (err) {
      console.log(err, "false");
      result(null, err);
    } else {
      console.log(res);
      result(null, res);
    }
  });
};

module.exports = User;
