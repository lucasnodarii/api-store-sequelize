import express from "express";
import productController from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", productController.getProducts);
router.get("/info", productController.getAllProductsInfo);
router.get("/:id", productController.getProduct);
router.post("/", productController.createProduct);
router.post("/info", productController.createProductInfo);
router.post("/review", productController.createReview);
router.put("/", productController.updateProduct);
router.put("/info", productController.updateProductInfo);
router.delete("/:id", productController.deleteProduct);
router.delete("/:id/review/:index", productController.deleteReview);
router.delete("/info/:id", productController.deleteProductInfo);

export default router;
