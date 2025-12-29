const express = require("express");
const router = express.Router();
const isloggedin = require("../middlewares/isLoggedIn");
const productModel = require("../models/product-model")
const success = require("../models/owners-model")

router.get("/",function(req,res){
    let error = req.flash("error");
    res.render("index", {error});
});


router.get("/shop", isloggedin, async function(req,res){
     const products = await productModel.find(); // or any array
    res.render("shop", {products});
});

// router.get("/products", async (req, res) => {
//     const products = await Product.find(); // or any array

//     res.render("products", { products });
// });


module.exports = router;