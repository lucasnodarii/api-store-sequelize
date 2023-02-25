import productRepository from "../repositories/product.repository.js";
import supplierRepository from "../repositories/supplier.repository.js";
import saleRepository from "../repositories/sale.repository.js";
import productInfoRepository from "../repositories/productInfo.repository.js";

const productService = {
  createProductService: async function (product) {
    const supplier = await supplierRepository.getSupplierRepository(
      product.supplierId
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
    const sales = await saleRepository.getSalesByProductIdRepository(id);
    if (sales.length !== 0) {
      throw new Error("Não é possível excluir, o produto já possui vendas");
    }
    await productRepository.deleteProductRepository(id);
  },
  updateProductService: async function (product) {
    const supplier = await supplierRepository.getSupplierRepository(
      product.supplierId
    );
    if (!supplier) {
      throw new Error("Supplier not exists");
    }
    return await productRepository.updateProductRepository(product);
  },
  createProductInfoService: async function (productInfo) {
    await productInfoRepository.createProductInfoRepository(productInfo);
  },
  updateProductInfoService: async function (productInfo){
    await productInfoRepository.updateProductInfoRepository(productInfo);
  }
};

export default productService;
