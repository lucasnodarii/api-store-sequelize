import Product from "../models/product.model.js";

const productRepository = {
  createProductRepository: async function (product) {
    try {
      return await Product.create(product);
    } catch (error) {
      throw error;
    }
  },
  getProductsRepository: async function () {
    try {
      return await Product.findAll();
    } catch (error) {
      throw error;
    }
  },
  getProductRepository: async function (id) {
    try {
      return await Product.findByPk(id);
    } catch (error) {
      throw error;
    }
  },
  deleteProductRepository: async function (id) {
    try {
      await Product.destroy({
        where: {
          productId: id,
        },
      });
    } catch (error) {
      throw error;
    }
  },
  updateProductRepository: async function (product) {
    try {
      await Product.update(product, {
        where: {
          productId: product.productId,
        },
      });
      return await productRepository.getProductRepository(
        product.productId
      );
    } catch (error) {
      throw error;
    }
  },
};

export default productRepository;
