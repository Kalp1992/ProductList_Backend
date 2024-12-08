const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
      // Add validation to ensure a price is provided
    },
    isRecommended: {
        type: Boolean,
        default: false, // Use actual Boolean and default to false
    },
    isBestseller: {
        type: Boolean,
        default: false, // Use actual Boolean and default to false
    },
    status: {
        type: Boolean,
        default: false, // Use actual Boolean and default to false
    },
});

// Create and export the model
const Products = mongoose.model("Product", productSchema);
module.exports = Products;
