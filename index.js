const express = require("express");
const bodyparser = require("body-parser")
const connect = require("./config/db");
const router = require("./routes/userRoutes");
const { route } = require("./routes/userRoutes");
const cors = require('cors')

require('dotenv').config()
const app = express();

connect();

app.use(cors())
app.use(bodyparser.json());
app.use('/', router);

app.get("/", router);
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('App is running');
});
