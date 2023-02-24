import saleRepository from "../repositories/sale.repository.js";
import clientRepository from "../repositories/client.repository.js";
import productRepository from "../repositories/product.repository.js";

const saleService = {
  createSaleService: async function (sale) {
    const product = await productRepository.getProductRepository(
      sale.product_id
    );
    if (!product) {
      throw new Error("Product not exists");
    }

    const client = await clientRepository.getClientRepository(sale.client_id);
    if (!client) {
      throw new Error("Client not exists");
    }

    if (product.stock > 0) {
      sale = await saleRepository.createSaleRepository(sale);
      product.stock--;
      await productRepository.updateProductRepository(product);
      return sale;
    } else {
      throw new Error("There are not stock for this product");
    }
  },

  getSalesService: async function (productId) {
    if (productId) {
      return await saleRepository.getSalesByProductIdRepository(productId);
    }
    return await saleRepository.getSalesRepository();
  },

  getSaleService: async function (id) {
    return await saleRepository.getSaleRepository(id);
  },
  deleteSaleService: async function (id) {
    const sale = await saleRepository.getSaleRepository(id);
    if (sale) {
      const product = await productRepository.getProductRepository(
        sale.product_id
      );
      await saleRepository.deleteSaleRepository(id);
      product.stock++;
      await productRepository.updateProductRepository(product);
    } else {
      throw new Error("There are nor sale with this ID");
    }
  },
  updateSaleService: async function (sale) {
    if (!(await productRepository.getProductRepository(sale.product_id))) {
      throw new Error("Product not exists");
    }

    if (!(await clientRepository.getClientRepository(sale.client_id))) {
      throw new Error("Client not exists");
    }
    return await saleRepository.updateSaleRepository(sale);
  },
};

export default saleService;
