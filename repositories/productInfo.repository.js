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
};

export default productInfoRepository;
