 const Product=require('./ProductModel')
exports.createProduct=async (req,res,next)=>{
    try{
        console.log(req.body)
const product=await Product.create(req.body);
res.json({
    status:'success',
    data:product
})
    }
    catch(err){
        console.log(err);
res.status(500).json({
status:'error'
})
    }
}
exports.deleteProduct=async (req,res,next)=>{
    try{

    await Product.deleteOne({_id:req.params.id});
    res.status(202).json({
        status:'success'
    })
}
catch(err){
    console.log(err)
res.status(500).json({
    status:'error'
})
}
}
exports.updateProduct=async (req,res,next)=>{
    try{
    const product=await Product.patch(req.body);
    res.json({
        status:'success',
        data:product
    })
}
catch(err){
res.status(500).json({
    status:'error'
})
}
}
exports.getProduct = async (req,res,next)=>{
    try{
    const product=await Product.findById({_id : req.params.id});
    res.json({
        status:'success',
        data:product
    })
}
catch(err){
res.status(500).json({
    status:'error'
})
}
}
exports.getProducts=async (req,res,next)=>{
try{
    const products=await Product.find();
res.json({
    status:'success',
    data:products
})
}
catch(err){

}
}