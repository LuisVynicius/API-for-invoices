
const db = require('API-for-invoices-main/mysql.js');


const notaFiscalRepository = {
  findInvoicerById: (id, callback) => {
    db.pool.query('SELECT * FROM notasfiscais WHERE NotaFiscalID = ?', [id], callback);
  },
  findInvoicerAll: (callback) => {
    db.pool.query('SELECT * FROM notasfiscais', callback);
  },
  deleteInvoicerById: (id, callback) => {
    db.pool.query('DELETE FROM notasfiscais WHERE NotaFiscalID = ?', [id], callback);
  },
  findInvoicerByUserId: (Userid, callback) => {
    db.pool.query('SELECT * FROM notasfiscais WHERE UsuarioID = ?', [Userid], callback);
  },
};