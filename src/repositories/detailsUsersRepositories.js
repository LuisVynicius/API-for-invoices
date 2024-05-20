const db = require('API-for-invoices-main/mysql.js');

const usuarioDetalhesRepository = {
    getUserDetailsByUserId: (userId, callback) => {
      db.pool.query('SELECT * FROM usuariodetalhes WHERE UsuarioID = ?', [userId], callback);
    }
  };