const express = require('express');
const router = express.Router();
const jsonFile = require(`../public/test.json`);

router.get('/todos', (req,res,next) => {
    res.json(jsonFile);
});

module.exports = router;