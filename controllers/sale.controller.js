import saleService from "../services/sale.service.js";

const saleController = {
  createSale: async function (req, res, next) {
    try {
      let sale = req.body;
      if (
        !sale.value ||
        !sale.date ||
        !sale.clientId ||
        !sale.productId
      ) {
        throw new Error("Submit all fields for registration");
      }
      sale = await saleService.createSaleService(sale);
      res.send(sale);
      logger.info(`POST /sale - ${JSON.stringify(sale)}`);
    } catch (error) {
      next(error);
    }
  },
  getSales: async function (req, res, next) {
    try {
      res.send(await saleService.getSalesService(req.query.productId, req.query.supplierId));
      logger.info("GET /sale");
    } catch (error) {
      next(error);
    }
  },
  getSale: async function (req, res, next) {
    try {
      res.send(await saleService.getSaleService(req.params.id));
      logger.info("GET /sale");
    } catch (error) {
      next(error);
    }
  },
  deleteSale: async function (req, res, next) {
    try {
      await saleService.deleteSaleService(req.params.id);
      res.end();
      logger.info("DELETE /sale");
    } catch (error) {
      next(error);
    }
  },
  updateSale: async function (req, res, next) {
    try {
      let sale = req.body;
      if (
        !sale.value ||
        !sale.date ||
        !sale.clientId ||
        !sale.productId ||
        !sale.saleId
      ) {
        throw new Error("Submit all fields for update");
      }
      sale = await saleService.updateSaleService(sale);
      res.send(sale);
      logger.info(`PUT /sale - ${JSON.stringify(sale)}`);
    } catch (error) {
      next(error);
    }
  },
};

export default saleController;
