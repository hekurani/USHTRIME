const express=require('express');
const router=express.Router();
const ProductController=require('./ProductController')
router
.route('/')
.get(ProductController.getProducts)
.post(ProductController.createProduct)
router
.route('/:id')
.delete(ProductController.deleteProduct)
.get(ProductController.getProduct)
.patch(ProductController.updateProduct)
module.exports=router