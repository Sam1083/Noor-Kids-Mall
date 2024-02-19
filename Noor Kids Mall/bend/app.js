const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const connectDB = require("./Config/connectDb");
const dotenv = require("dotenv").config();
const cors = require("cors");
const routes = require("./Routes/index"); 

connectDB();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/api", routes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
