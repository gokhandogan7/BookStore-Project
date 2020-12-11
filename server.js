const express = require("express");
const app = express();
const cors = require("cors");


const port = process.env.port || 5000

const router = require("./routes/router");
const connectDB = require("./models/connectDB");

app.use(cors());

connectDB();

app.use(express.json());
app.use("/api", router);

app.listen(port, () => {
  console.log(`listen port ${port}`);
});

