const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    console.log('hola');
    res.send("hola");
});

module.exports = { router };
