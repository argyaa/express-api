const express = require("express");
const bodyParser = require("body-parser");
const DBconnect = require("./src/config/db");
const userRoutes = require("./src/routes/userRoutes");
const mobilRoutes = require("./src/routes/mobilRoutes");
require("dotenv").config();

DBconnect();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// route
app.use("/api/user", userRoutes);
app.use("/api/mobil", mobilRoutes);

app.listen(process.env.PORT, () => {
	console.log(`Server running in ${process.env.PORT}`);
});
