import productService from "../services/product.service.js";

const productController = {
  createProduct: async function (req, res, next) {
    try {
      let product = req.body;
      if (
        !product.name ||
        !product.description ||
        !product.value ||
        !product.stock ||
        !product.supplier_id
      ) {
        throw new Error("Submit all fields for registration");
      }
      product = await productService.createProductService(product);
      res.send(product);
      logger.info(`POST /product - ${JSON.stringify(product)}`);
    } catch (error) {
      next(error);
    }
  },
  getProducts: async function (req, res, next) {
    try {
      res.send(await productService.getProductsService());
      logger.info("GET /product");
    } catch (error) {
      next(error);
    }
  },
  getProduct: async function (req, res, next) {
    try {
      res.send(await productService.getProductService(req.params.id));
      logger.info("GET /product");
    } catch (error) {
      next(error);
    }
  },
  deleteProduct: async function (req, res, next) {
    try {
      await productService.deleteProductService(req.params.id);
      res.end();
      logger.info("DELETE /product");
    } catch (error) {
      next(error);
    }
  },
  updateProduct: async function (req, res, next) {
    try {
      let product = req.body;
      if (
        !product.product_id ||
        !product.name ||
        !product.description ||
        !product.value ||
        !product.stock ||
        !product.supplier_id
      ) {
        throw new Error("Submit all fields for update");
      }
      product = await productService.updateProductService(product);
      res.send(product);
      logger.info(`PUT /product - ${JSON.stringify(product)}`);
    } catch (error) {
      next(error);
    }
  },
};

export default productController;
