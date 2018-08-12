const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    console.log(req);
    res.send('Home');
});

module.exports = router;