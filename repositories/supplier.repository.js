import Supplier from "../models/supplier.model.js";

const supplierRepository = {
  createSupplierRepository: async function (supplier) {
    try {
      return await Supplier.create(supplier);
    } catch (error) {
      throw error;
    }
  },
  getSuppliersRepository: async function () {
    try {
      return await Supplier.findAll();
    } catch (error) {
      throw error;
    }
  },
  getSupplierRepository: async function (id) {
    try {
      return await Supplier.findByPk(id);
    } catch (error) {
      throw error;
    }
  },
  deleteSupplierRepository: async function (id) {
    try {
      await Supplier.destroy({
        where: {
          supplierId: id,
        },
      });
    } catch (error) {
      throw error;
    }
  },
  updateSupplierRepository: async function (supplier) {
    try {
      await Supplier.update(supplier, {
        where: {
          supplierId: supplier.supplierId,
        },
      });
      return await supplierRepository.getSupplierRepository(
        supplier.supplierId
      );
    } catch (error) {
      throw error;
    }
  },
};

export default supplierRepository;
