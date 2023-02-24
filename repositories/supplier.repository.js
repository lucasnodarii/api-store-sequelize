import { connect } from "./db.js";

const supplierRepository = {
  createSupplierRepository: async function (supplier) {
    const conn = await connect();
    try {
      const sql =
        "INSERT INTO suppliers (name, cnpj, phone, email, adress) VALUES ($1, $2, $3, $4, $5) RETURNING *";
      const values = [
        supplier.name,
        supplier.cnpj,
        supplier.phone,
        supplier.email,
        supplier.adress,
      ];
      const res = await conn.query(sql, values);
      return res.rows[0];
    } catch (error) {
      throw error;
    } finally {
      conn.release();
    }
  },
  getSuppliersRepository: async function () {
    const conn = await connect();
    try {
      const res = await conn.query("SELECT * FROM suppliers");
      return res.rows;
    } catch (error) {
      throw error;
    } finally {
      conn.release();
    }
  },
  getSupplierRepository: async function (id) {
    const conn = await connect();
    try {
      const res = await conn.query(
        "SELECT * FROM suppliers WHERE supplier_id = $1",
        [id]
      );
      return res.rows[0];
    } catch (error) {
      throw error;
    } finally {
      conn.release();
    }
  },
  deleteSupplierRepository: async function (id) {
    const conn = await connect();
    try {
      await conn.query("DELETE FROM suppliers WHERE supplier_id = $1", [id]);
    } catch (error) {
      throw error;
    } finally {
      conn.release();
    }
  },
  updateSupplierRepository: async function (supplier) {
    const conn = await connect();
    try {
      const sql =
        "UPDATE suppliers SET name = $1, cnpj = $2, phone = $3, email = $4, adress = $5 WHERE supplier_id = $6 RETURNING *";
      const values = [
        supplier.name,
        supplier.cnpj,
        supplier.phone,
        supplier.email,
        supplier.adress,
        supplier.supplier_id,
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

export default supplierRepository;
