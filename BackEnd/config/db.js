//TODO Add database config
//const mongoose = require("mongoose");
//require("dotenv").config();

//mongoose.set("strictQuery", false);
//mongoose
//  .connect(process.env.MONGO_URI)
//  .then(() => console.log("connected to MongoDB"))
//  .catch((err) => console.error(err));

//module.exports = mongoose

import mongoose from "mongoose";

const conectarDB = async ()=>{
    try{
        const db = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const url = `${db.connection.host}:${db.connection.port}`;
        console.log(`Mongo db conectado en: ${url}`)
        }catch(error){
        console.log(`error: ${error.message}`)
        process.exit(1);
    }
}

export default conectarDB;