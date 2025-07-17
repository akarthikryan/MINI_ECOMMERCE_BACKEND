const ProductModel = require('../models/productModel');

//Get Products API - /api/v1/products/products
exports.getProducts = async(req, res, next) => {

    const products = await ProductModel.find({});

    res.json({
        success: true,
        products
    })
}

//Get Single Product API - /api/v1/products/product/:id
exports.getSingleProduct = async (req, res, next) => {
    console.log(req.params.id, 'ID');
    try{
         const product =await ProductModel.findById(req.params.id);

        res.json({
            sucess: true,
            product
    })
    } catch (error){
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
   
}