import productRepository from "../repositories/product.repository.js";
import supplierRepository from "../repositories/supplier.repository.js";

const productService = {
  createProductService: async function (product) {
    const supplier = await supplierRepository.getSupplierRepository(
      product.supplier_id
    );
    if (!supplier) {
      throw new Error("Supplier not exists");
    }
    return await productRepository.createProductRepository(product);
  },

  getProductsService: async function () {
    return await productRepository.getProductsRepository();
  },

  getProductService: async function (id) {
    return await productRepository.getProductRepository(id);
  },
  deleteProductService: async function (id) {
    await productRepository.deleteProductRepository(id);
  },
  updateProductService: async function (product) {
    const supplier = await supplierRepository.getSupplierRepository(
      product.supplier_id
    );
    if (!supplier) {
      throw new Error("Supplier not exists");
    }
    return await productRepository.updateProductRepository(product);
  },
};

export default productService;
