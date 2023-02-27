import getClient from "./mongo.db.js";

const productInfoRepository = {
  createProductInfoRepository: async function (productInfo) {
    const client = getClient();
    try {
      await client.connect();
      await client.db("store").collection("productInfo").insertOne(productInfo);
    } catch (error) {
      throw error;
    } finally {
      await client.close();
    }
  },
  updateProductInfoRepository: async function (productInfo) {
    const client = getClient();
    try {
      await client.connect();
      await client
        .db("store")
        .collection("productInfo")
        .updateOne(
          { productId: productInfo.productId },
          { $set: { ...productInfo } }
        );
    } catch (error) {
      throw error;
    } finally {
      await client.close();
    }
  },
  getProductInfoRepository: async function (productId) {
    const client = getClient();
    try {
      await client.connect();
      return await client
        .db("store")
        .collection("productInfo")
        .findOne({ productId });
    } catch (error) {
      throw error;
    } finally {
      await client.close();
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
    const client = getClient();
    try {
      await client.connect();
      return await client
        .db("store")
        .collection("productInfo")
        .find({})
        .toArray();
    } catch (error) {
      throw error;
    } finally {
      await client.close();
    }
  },
  deleteProductInfoRepository: async function (productId) {
    const client = getClient();
    try {
      await client.connect();
      return await client
        .db("store")
        .collection("productInfo")
        .deleteOne({ productId });
    } catch (error) {
      throw error;
    } finally {
      await client.close();
    }
  },
};

export default productInfoRepository;
