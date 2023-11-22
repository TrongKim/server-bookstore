const express = require('express');
const router = express.Router();

const Rate = require('../models/rate');

router.post('/create', (req, res) => {
    Rate.create({
        id: '',
        message: req.body.message,
        rate: req.body.rate,
        id_product: req.body.id_product
    })
        .then(new_data => {
            return res.status(200).json({
                status: 200,
                data: new_data,
                message: 'create rate successfully'
            });
        })
        .catch(error => {
            console.error('Lỗi:', error);
        });
});

router.get('/get-all', (req, res) => {
    Rate.findAll()
        .then(new_data => {
            return res.status(200).json({
                status: 200,
                data: new_data,
                message: 'get rate successfully'
            });
        })
        .catch(error => {
            console.error('Lỗi:', error);
        });
});

router.get('/get-one', (req, res) => {
    Rate.findOne({
        where: {
            id: req.body.id
        }
    })
        .then(new_data => {
            return res.status(200).json({
                status: 200,
                data: new_data,
                message: 'get rate successfully'
            });
        })
        .catch(error => {
            console.error('Lỗi:', error);
        });
});

router.post('/update', (req, res) => {
    Rate.update({
        message: req.body.message,
        rate: req.body.rate,
    },
    {
        where: {
            id: req.body.id,
        }
    })
        .then(new_data => {
            return res.status(200).json({
                status: 200,
                data: new_data,
                message: 'update rate successfully'
            });
        })
        .catch(error => {
            console.error('Lỗi:', error);
        });
});

router.post('delete', async (req, res) => {
    Product.destroy({
        where: {
            id: req.body.id,
        }
    })
        .then(rowsDeleted => {
            if (rowsDeleted > 0) {
                return res.status(200).json({
                    status: 200,
                    data: {},
                    message: 'delete rate successfully'
                });
            } else {
                return res.status(404).json({
                    status: 404,
                    data: {},
                    message: 'not found rate to delete'
                });
            }
        })
        .catch(error => {
            console.error('Lỗi:', error);
        });
});

module.exports = router;