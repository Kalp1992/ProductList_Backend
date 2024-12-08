
const Products=require("../Model/product")
const mongoose = require('mongoose');


const getProduct=async(req,res)=>{
    let products;
try{
       products= await Products.find();
       res.status(200).json({status:true, data:products})
}catch(error){
       console.log("error",error);
      res.status(200).json({status:false,data:[]}

      )
}

}
const getByIdProduct=async(req,res)=>{
  const id=req.params._id;
try{
  let product=await Products.findById(id);
  return res.status(200).json({status:true,data:product})
}catch(error){
 return res.status(404).json({status:false,data:{}})
}
}
const addProduct=async(req,res)=>{
   const {name,description,price}=req.body;
   console.log(req.body);
    try{
      const product= new Products({name:name,description:description,price:price,
       });
         console.log(product);
        await product.save()
        res.status(201).json({status:true})

    }catch(error){
        res.json({status:false})
    }

}
const updateProduct=async(req,res)=>{
    const id=req.params._id;
    const {name,description,price}=req.body;
  
    try{ let product=  await  Products.findById(id);
     
            product.name=name;
            product.description=description;
            product.price=price;
            
        
           await product.save()
           res.status(200).json({status:true})
          }catch(error){
        console.log("error",error)
        res.status(404).json({status:false});
    }

}
const updateIsRecommended=async(req,res)=>{
  const id=req.params._id;
  const {isRecommended}=req.body;

  try{ let product=  await  Products.findById(id);
   
          product.isRecommended=isRecommended;
         
      
         await product.save()
         res.status(200).json({status:true})
        }catch(error){
      console.log("error",error)
      res.status(404).json({status:false});
  }

}
const updateIsBestseller=async(req,res)=>{
  const id=req.params._id;
  const {isBestseller}=req.body;

  try{ let product=  await  Products.findById(id);
   
         
          product.isBestseller=isBestseller;
          
      
         await product.save()
         res.status(200).json({status:true})
        }catch(error){
      console.log("error",error)
      res.status(404).json({status:false});
  }

}
const updateStatus=async(req,res)=>{
  const id=req.params._id;
  const {status}=req.body;

  try{ let product=  await  Products.findById(id);
   
          product.status=status;
         
      
         await product.save()
         res.status(200).json({status:true})
        }catch(error){
      console.log("error",error)
      res.status(404).json({status:false});
  }

}
// Import the Product model

const deleteProduct = async (req, res) => {
 // Assuming you pass the ID as a route parameter like /products/:id
 const id=req.params._id;
  // Step 1: Validate if the provided ID is a valid ObjectId
 
  try {
    let product =await  Products.findById(id)
    // Step 2: Perform the delete operation using the valid ObjectId
    const result = await Products.deleteOne( {_id:product._id} );

    // Step 3: Check if any document was deleted
    if (result.deletedCount === 0) {
      // No document was deleted, meaning the product ID was not found
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    // Step 4: Return success if the product was deleted
    return res.status(200).json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};



  

module.exports.getProduct=getProduct;
module.exports.addProduct=addProduct;
module.exports.updateProduct=updateProduct;
module.exports.deleteProduct=deleteProduct;
module.exports.getByIdProduct=getByIdProduct;
module.exports.updateStatus=updateStatus
module.exports.updateIsBestseller=updateIsBestseller
module.exports.updateIsRecommended=updateIsRecommended