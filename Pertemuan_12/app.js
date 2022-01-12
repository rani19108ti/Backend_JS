// import express
const express = require("express");
// membuat object express
const app = express();
// mendefinisikan route
const router = require("./routes/api");

//menggunakan middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(router);

// definisikan port
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});