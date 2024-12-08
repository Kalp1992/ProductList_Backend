const express=require("express");
const Product_controller=require("../Controller/product_controller");
const router= express.Router();

router.get("/get",Product_controller.getProduct);
router.get("/getbyid/:_id",Product_controller.getByIdProduct);
router.post("/add",Product_controller.addProduct),
router.patch("/update/:_id",Product_controller.updateProduct);
router.patch("/update_status/:_id",Product_controller.updateStatus);
router.patch("/update_isRecommended/:_id",Product_controller.updateIsRecommended);
router.patch("/update_isBestseller/:_id",Product_controller.updateIsBestseller);

router.delete("/delete/:_id",Product_controller.deleteProduct);

module.exports= router;