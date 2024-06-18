const express = require("express");
const cors = require("cors");

app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/contact", (req, res) => {
  res.send("Message received");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
