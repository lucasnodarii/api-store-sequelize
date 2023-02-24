import { connect } from "./db.js";

const saleRepository = {
  createSaleRepository: async function (sale) {
    const conn = await connect();
    try {
      const sql =
        "INSERT INTO sales (value, date, client_id, product_id) VALUES ($1, $2, $3, $4) RETURNING *";
      const values = [sale.value, sale.date, sale.client_id, sale.product_id];
      const res = await conn.query(sql, values);
      return res.rows[0];
    } catch (error) {
      throw error;
    } finally {
      conn.release();
    }
  },
  getSalesRepository: async function () {
    const conn = await connect();
    try {
      const res = await conn.query("SELECT * FROM sales");
      return res.rows;
    } catch (error) {
      throw error;
    } finally {
      conn.release();
    }
  },
  getSalesByProductIdRepository: async function (productId) {
    const conn = await connect();
    try {
      const res = await conn.query("SELECT * FROM sales WHERE product_id = $1", [productId]);
      return res.rows;
    } catch (error) {
      throw error;
    } finally {
      conn.release();
    }
  },
  getSaleRepository: async function (id) {
    const conn = await connect();
    try {
      const res = await conn.query("SELECT * FROM sales WHERE sale_id = $1", [
        id,
      ]);
      return res.rows[0];
    } catch (error) {
      throw error;
    } finally {
      conn.release();
    }
  },
  deleteSaleRepository: async function (id) {
    const conn = await connect();
    try {
      await conn.query("DELETE FROM sales WHERE sale_id = $1", [id]);
    } catch (error) {
      throw error;
    } finally {
      conn.release();
    }
  },
  updateSaleRepository: async function (sale) {
    const conn = await connect();
    try {
      const sql =
        "UPDATE sales SET value = $1, date = $2, client_id = $3 WHERE sale_id = $4 RETURNING *";
      const values = [
        sale.value,
        sale.date,
        sale.client_id,
        sale.sale_id,
      ];
      const res = await conn.query(sql, values);
      return res.rows[0];
    } catch (error) {
      throw error;
    } finally {
      conn.release();
    }
  },
};

export default saleRepository;
