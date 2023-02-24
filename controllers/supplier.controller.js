import supplierService from "../services/supplier.service.js";

const supplierController = {
  createSupplier: async function (req, res, next) {
    try {
      let supplier = req.body;
      if (
        !supplier.name ||
        !supplier.cnpj ||
        !supplier.phone ||
        !supplier.email ||
        !supplier.adress
      ) {
        throw new Error("Submit all fields for registration");
      }
      supplier = await supplierService.createSupplierService(supplier);
      res.send(supplier);
      logger.info(`POST /supplier - ${JSON.stringify(supplier)}`);
    } catch (error) {
      next(error);
    }
  },
  getSuppliers: async function (req, res, next) {
    try {
      res.send(await supplierService.getSuppliersService());
      logger.info("GET /supplier");
    } catch (error) {
      next(error);
    }
  },
  getSupplier: async function (req, res, next) {
    try {
      res.send(await supplierService.getSupplierService(req.params.id));
      logger.info("GET /supplier");
    } catch (error) {
      next(error);
    }
  },
  deleteSupplier: async function (req, res, next) {
    try {
      await supplierService.deleteSupplierService(req.params.id);
      res.end();
      logger.info("DELETE /supplier");
    } catch (error) {
      next(error);
    }
  },
  updateSupplier: async function (req, res, next) {
    try {
      let supplier = req.body;
      if (
        !supplier.supplier_id ||
        !supplier.name ||
        !supplier.cnpj ||
        !supplier.phone ||
        !supplier.email ||
        !supplier.adress
      ) {
        throw new Error("Submit all fields for update");
      }
      supplier = await supplierService.updateSupplierService(supplier);
      res.send(supplier);
      logger.info(`PUT /supplier - ${JSON.stringify(supplier)}`);
    } catch (error) {
      next(error);
    }
  },
};

export default supplierController;
