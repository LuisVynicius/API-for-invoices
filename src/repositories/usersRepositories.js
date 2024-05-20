const db = require('API-for-invoices-main/mysql.js');

const usuarioRepository = {
    findUserByEmail: (email, callback) => {
      db.pool.query('SELECT * FROM usuarios WHERE Email = ?', [email], callback);

    },

    findUserByID: (id, callback) => {
      db.pool.query('SELECT * FROM usuarios WHERE usuarioID = ?', [id], callback);
      
    }
  };


