const express = require('express');
const router = express.Router();
const mysql = require('../mysql/mysql').pool;

router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn)=>{
        conn.query(
            "SELECT * FROM usuarios",
            [],
            (error, result, field)=>{
                conn.release();
                res.status(200).send({
                    list : result
                });
            }
        )
    })
});

router.get('/:id', (req, res, next) =>{
    mysql.getConnection((error, conn)=>{
        conn.query(
            "SELECT * FROM usuarios WHERE UsuarioID = (?)",
            [parseInt(req.params.id)],
            (error, result, field) =>{
                conn.release();
                res.status(200).send(result[0]);
            }
        );
    });
});

router.post('/', (req, res, next) =>{
    mysql.getConnection((error, conn)=>{
        conn.query(
            "INSERT INTO usuarios(Nome, Email, Senha) VALUES (?, ?, ?)",
            [req.body.Nome, req.body.Email, req.body.Senha],
            (error, result, field) =>{
                conn.release();
                res.status(201).send({
                    Status: "User created"
                });
            }
        );
    });
});

router.put('/', (req, res, next) =>{
    mysql.getConnection((error, conn)=>{
        conn.query(
            "UPDATE usuarios SET Nome = (?), Email = (?), Senha = (?) WHERE UsuarioID = (?)",
            [req.body.Nome, req.body.Email, req.body.Senha, req.body.id],
            (error, result, field)=>{
                conn.release();
                res.status(204);
            }

        );
    });
});

router.delete('/:id', (req, res, next) =>{
    mysql.getConnection((error, conn)=>{
        conn.query(
          "DELETE FROM usuarios WHERE UsuarioID = (?)",
          [req.params.id],
          (error, result, field)=>{
            conn.release();
            res.status(204);
          }
        );
    });
});

module.exports = router;