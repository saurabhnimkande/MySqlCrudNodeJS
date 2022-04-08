const express = require("express");

const app = express();

const port = process.env.PORT || 1234;
const userRoute = require("./src/routes/user.route");

app.use(express.json());

app.use("/user", userRoute);

app.listen(port, () => {
  console.log("listning on port 1234");
});
