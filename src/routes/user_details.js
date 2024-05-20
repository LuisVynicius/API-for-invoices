const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        Status : "/UserD Get ok"
    });
});

router.get('/:id', (req, res, next) =>{
    const id = parseInt(req.params.id);
    res.status(200).send({
        Status: "/UserD/id Get Ok"
    });
});

router.post('/', (req, res, next) =>{

    const userD = {

    }

    res.status(201).send({
        Status: "/UserD Post Ok",
        Body: userD
    });
});

router.put('/', (req, res, next) =>{
    res.status(204).send({
        Status: "/UserD Put Ok"
    });
});

router.delete('/', (req, res, next) =>{
    res.status(204).send({
        Status: "/UserD Delete Ok"
    });
});

module.exports = router;