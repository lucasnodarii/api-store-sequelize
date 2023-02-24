import supplierRepository from "../repositories/supplier.repository.js";

const supplierService = {
  createSupplierService: async function (supplier) {
    return await supplierRepository.createSupplierRepository(supplier);
  },

  getSuppliersService: async function () {
    return await supplierRepository.getSuppliersRepository();
  },

  getSupplierService: async function (id) {
    return await supplierRepository.getSupplierRepository(id);
  },
  deleteSupplierService: async function (id) {
    await supplierRepository.deleteSupplierRepository(id);
  },
  updateSupplierService: async function (supplier) {
    return await supplierRepository.updateSupplierRepository(supplier);
  },
};

export default supplierService;
