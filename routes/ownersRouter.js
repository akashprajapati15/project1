const express = require("express");
const router = express.Router();

router.get("/", function (req , res ){
    res.send("helooooo owner");
});

module.exports = router;