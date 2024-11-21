const express = require('express');
const router = express.Router();
const products = require('../Models/Products');

router.post("/insertproduct",async(req,res) => {
    const {ProductName , ProductPrice,ProductBarcode} = req.body;
    try{
        const pre = await products.findOne({ProductBarcode:ProductBarcode})
        console.log(pre);
        if(pre){
            res.status(422).json("Product is already added")
        }
        else{
            const addProduct = new products({ProductName , ProductPrice,ProductBarcode})
            await addProduct.save();
            res.status(201).json(addProduct)
            console.log(addProduct)
        }
    }
    catch(err){
        console.log(err)
    }
})


router.get("/products",async(req,res)=>{
    try{
const getProducts = await products.find({})
console.log(getProducts);
res.status(200).json(getProducts);
    }
    catch(err){
        console.log(err)
    }
})


router.get("/products/:id",async(req,res)=>{
    try{
const getProduct = await products.findById(req.params.id)
console.log(getProduct);
res.status(200).json(getProduct);
    }
    catch(err){
        console.log(err)
    }
})

router.get("/updateproduct/:id",async(req,res)=>{
    const {ProductName , ProductPrice,ProductBarcode} = req.body;
    try{
const updateProducts = await products.findByIdAndUpdate(req.params.id ,{ProductName , ProductPrice,ProductBarcode} , {new:true});
console.log("Data Updated");
res.status(200).json(updateProducts);
    }
    catch(err){
        console.log(err);
    }
})

router.delete('/deleteproduct/:id',async(req,res)=>{
    try{
        const deleteproduct = await products.findByIdAndDelete(req.params.id);
        console.log('Data Deleted');
        res.status(201).json(deleteproduct);
    }catch(err){
        console.log(err);
    }
})


module.exports = router;