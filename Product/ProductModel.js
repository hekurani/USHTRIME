const mongoose=require('mongoose');
  const productSchema = new mongoose.Schema({
name:{
    type:String,
    required:[true,'An product must have an name']
},
price:{
    type:Number,
    required:[true,'An product must have an price']
},description:{
    type:String,
   
}
  })
  const Product=mongoose.model("Product",productSchema);
  
  module.exports=Product;