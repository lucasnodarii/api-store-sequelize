import mongoose from "mongoose";
import ReviewSchema from "./reviews.schema.js";

const ProductInfoSchema = new mongoose.Schema(
  {
    productId: Number,
    category: String,
    width: String,
    height: String,
    depth: String,
    reviews: [ReviewSchema],
  },
  { collection: "productInfo" }
);

export default ProductInfoSchema;
