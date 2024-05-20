const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        Status : "/Invoice Get ok"
    });
});

router.get('/:id', (req, res, next) =>{
    const id = parseInt(req.params.id);
    res.status(200).send({
        Status: "/Invoice/id Get Ok"
    });
});

router.post('/', (req, res, next) =>{

    const invoice = {

    }

    res.status(201).send({
        Status: "/Invoice Post Ok",
        Body: invoice
    });
});

router.put('/', (req, res, next) =>{
    res.status(204).send({
        Status: "/Invoice Put Ok"
    });
});

router.delete('/', (req, res, next) =>{
    res.status(204).send({
        Status: "/Invoice Delete Ok"
    });
});

module.exports = router;