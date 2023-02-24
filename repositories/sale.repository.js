import Sale from "../models/sale.model.js";
import Product from "../models/product.model.js";
import Client from "../models/client.model.js";

const saleRepository = {
  createSaleRepository: async function (sale) {
    try {
      return await Sale.create(sale);
    } catch (error) {
      throw error;
    }
  },
  getSalesRepository: async function () {
    try {
      return await Sale.findAll({
        include: [
          {
            model: Product,
          },
          {
            model: Client,
          },
        ],
      });
    } catch (error) {
      throw error;
    }
  },
  getSalesByProductIdRepository: async function (productId) {
    try {
      return await Sale.findAll({
        where: {
          productId: productId,
        },
        include: [
          {
            model: Product,
          },
          {
            model: Client,
          },
        ],
      });
    } catch (error) {
      throw error;
    }
  },
  getSalesBySupplierIdRepository: async function (supplierId) {
    try {
      return await Sale.findAll({
        include: [
          {
            model: Product,
            where: {
              supplierId: supplierId,
            },
          },
        ],
      });
    } catch (error) {
      throw error;
    }
  },
  getSaleRepository: async function (id) {
    try {
      return await Sale.findByPk(id);
    } catch (error) {
      throw error;
    }
  },
  deleteSaleRepository: async function (id) {
    try {
      await Sale.destroy({
        where: {
          saleId: id,
        },
      });
    } catch (error) {
      throw error;
    }
  },
  updateSaleRepository: async function (sale) {
    try {
      await Sale.update(
        {
          value: sale.value,
          date: sale.date,
          clientId: sale.clientId,
        },
        {
          where: {
            saleId: sale.saleId,
          },
        }
      );
      return await saleRepository.getSaleRepository(sale.saleId);
    } catch (error) {
      throw error;
    }
  },
};

export default saleRepository;
