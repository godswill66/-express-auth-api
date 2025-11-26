const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:8080"
}));


app.use("/api/auth", require("./routes/authRoutes"));

app.get("/", (req, res) => {
  res.send("Response from SERVER 1");
});


app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
