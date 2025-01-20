const { connect } = require("http2");
const mongoose = require ("mongoose")
const uri ="mongodb+srv://khushishrotaswini528:khushi@cluster0.ucg49.mongodb.net";

function conectDb(){
    mongoose
    .connect(uri)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log("Error connecting to MongoDB", err));
}

module.exports = conectDb