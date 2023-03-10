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
        !product.supplierId
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
        !product.productId ||
        !product.name ||
        !product.description ||
        !product.value ||
        !product.stock ||
        !product.supplierId
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
  createProductInfo: async function (req, res, next) {
    try {
      let productInfo = req.body;
      if (!productInfo.productId) {
        throw new Error("ProductId is obrigatory");
      }
      await productService.createProductInfoService(productInfo);
      res.end();
      logger.info(`POST /product/info - ${JSON.stringify(productInfo)}`);
    } catch (error) {
      next(error);
    }
  },
  updateProductInfo: async function (req, res, next) {
    try {
      let productInfo = req.body;
      if (!productInfo.productId) {
        throw new Error("ProductId is obrigatory");
      }
      await productService.updateProductInfoService(productInfo);
      res.end();
      logger.info(`PUT /product/info - ${JSON.stringify(productInfo)}`);
    } catch (error) {
      next(error);
    }
  },
  createReview: async function (req, res, next) {
    try {
      let params = req.body;
      if (!params.productId || !params.review) {
        throw new Error("Product ID and review are orbrigatories");
      }
      await productService.createReviewService(params.review, params.productId);
      res.end();
      logger.info(`POST /product/review`);
    } catch (error) {
      next(error);
    }
  },
  deleteReview: async function (req, res, next) {
    try {
      await productService.deleteReviewService(
        parseInt(req.params.id),
        req.params.index
      );
      res.end();
      logger.info(
        `DELETE /product/${req.params.id}/review/${req.params.index}`
      );
    } catch (error) {
      next(error);
    }
  },
  getAllProductsInfo: async function (req, res, next) {
    try {
      res.send(await productService.getAllProductInfoService());
      logger.info(`GET /product/info`);
    } catch (error) {
      next(error);
    }
  },
  deleteProductInfo: async function (req, res, next) {
    try {
      res.send(await productService.deleteProductInfoService(parseInt(req.params.id)));
      logger.info(`DELETE /product/info`);
    } catch (error) {
      next(error);
    }
  },
  
};

export default productController;
