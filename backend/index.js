const connectToMongo = require("./config/db");
const express = require("express");
const cors = require("cors");

// connect with database
connectToMongo();

const app = express();

// port number.
const port = 5000;

app.use(cors());
// we are using middleware to convert raw json data into js object. 
app.use(express.json());

// available routes in the project
app.use("/api/auth", require("./routes/auth"));
app.use("/api/data", require("./routes/data"));
app.use("/api/apiKey" , require("./routes/apiKey"));

app.listen(port, () => {
  console.log(`api-backend is working on port number :  ${port}`);
});
