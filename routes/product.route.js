import express from "express";
import productController from "../controllers/product.controller.js";

const router = express.Router();

router.post("/", productController.createProduct);
router.post("/info", productController.createProductInfo);
router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);
router.put("/", productController.updateProduct);
router.put("/info",productController.updateProductInfo);
router.delete("/:id", productController.deleteProduct);

export default router;
