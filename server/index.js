const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());  
app.use


app.listen(5000, () => {
  console.log("listening on 5000");
});
