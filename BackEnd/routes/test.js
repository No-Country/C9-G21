const express = require("express");

const router = express.Router();

router.get('/', (req, res) => {
    res.send("hola soy Emma");
    console.log('hola soy homelo chino :v');
});

module.exports =  router ;
