import ProductInfoSchema from "../schemas/productInfo.schema.js";
import connect from "./mongo.db.js";

const productInfoRepository = {
  createProductInfoRepository: async function (productInfo) {
    try {
      const mongoose = await connect();
      const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
      productInfo = new ProductInfo(productInfo);
      await productInfo.save();
    } catch (error) {
      throw error;
    }
  },
  updateProductInfoRepository: async function (productInfo) {
    try {
      const mongoose = await connect();
      const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
      await ProductInfo.findOneAndUpdate(
        { productId: productInfo.productId },
        productInfo
      );
    } catch (error) {
      throw error;
    }
  },
  getProductInfoRepository: async function (productId) {
    try {
      const mongoose = await connect();
      const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
      return await ProductInfo.findOne({ productId }).exec();
    } catch (error) {
      throw error;
    }
  },
  createReview: async function (review, productId) {
    try {
      const productInfo = await productInfoRepository.getProductInfoRepository(
        productId
      );
      productInfo.reviews.push(review);
      await productInfoRepository.updateProductInfoRepository(productInfo);
    } catch (error) {
      throw error;
    }
  },
  deleteReview: async function (productId, index) {
    try {
      const productInfo = await productInfoRepository.getProductInfoRepository(
        productId
      );
      productInfo.reviews.splice(index, 1);
      await productInfoRepository.updateProductInfoRepository(productInfo);
    } catch (error) {
      throw error;
    }
  },
  getAllProductInfoRepository: async function () {
    try {
      const mongoose = await connect();
      const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
      return await ProductInfo.find({}).exec();
    } catch (error) {
      throw error;
    }
  },
  deleteProductInfoRepository: async function (productId) {
    try {
      const mongoose = await connect();
      const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
      await ProductInfo.deleteOne({ productId });
    } catch (error) {
      throw error;
    }
  },
};

export default productInfoRepository;
