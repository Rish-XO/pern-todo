const express = require("express");
const cors = require("cors");

//middleware
app.use(cors());

const app = express();

app.listen(5000, () => {
  console.log("listening on 5000");
});
