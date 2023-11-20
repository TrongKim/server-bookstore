const express = require('express');
const router = express.Router();

const Product = require('../models/products');

router.get('/get-all', async (req, res) => {
    Product.findAll()
        .then(products => {
            return res.status(200).json({
                status: 200,
                data: products,
                message: 'get all book successfully'
            });
        })
        .catch(error => {
            console.error('Lỗi:', error);
        });
});

router.get('/get-books-by-name', async (req, res) => {
    if (!res.query.search_query) {
        return res.status(404).json({
            status: 404,
            data: {},
            message: 'not found search query'
        });
    }
    Product.findAll({
        where: {
            name: {
                [Op.iLike]: `%${res.query.search_query}%`, // Sử dụng Op.iLike để tìm kiếm không phân biệt chữ hoa chữ thường
            },
        }
    })
        .then(products => {
            return res.status(200).json({ 
                status: 200,
                data: products,
                message: 'get books by search successfully'
             });
        })
        .catch(error => {
            console.error('Lỗi:', error);
        });
})

router.get('/get-one', async (req, res) => {
    if (!req.query?.query) {
        return res.status(404).json({
            status: 404,
            data: {},
            message: 'not have id in query or query not in params'
        });
    }

    Product.findOne({
        where: { id: req.query.query }
    })
        .then(product => {
            return res.status(200).json({ 
                status: 200,
                data: product,
                message: 'get book successfully'
            });
        })
        .catch(error => {
            console.error('Lỗi:', error);
        });
});

router.post('/create', async (req, res) => {
    Product.create({
        id: '',
        name: req.body.name,
        genres: req.body.genres,
        price: req.body.price,
        description: req.body.description,
        pages: req.body.pages,
        length: req.body.length,
        images: req.body.images,
        publisher: req.body.publisher,
        language: req.body.language,
        isbn_10: req.body.isbn_10,
        dimensions: req.body.dimensions,
        who_like: req.body.who_like,
        message: req.body.message,
        about_author: req.body.about_author,
        amount: req.body.amount,
        author_id: req.body.author_id
    })
        .then(product => {
            return res.status(200).json({
                status: 200,
                data: product,
                message: 'create product successfully'
            });
        })
        .catch(error => {
            console.error('Lỗi:', error);
        });
});

router.post('update', async (req, res) => {
    Product.update({
        name: req.body.name,
        genres: req.body.genres,
        price: req.body.price,
        description: req.body.description,
        pages: req.body.pages,
        length: req.body.length,
        images: req.body.images,
        publisher: req.body.publisher,
        language: req.body.language,
        isbn_10: req.body.isbn_10,
        dimensions: req.body.dimensions,
        who_like: req.body.who_like,
        message: req.body.message,
        about_author: req.body.about_author,
        amount: req.body.amount,
        author_id: req.body.author_id
    },
    {
        where: {
            id: req.body.id,
        }
    })
        .then(product => {
            return res.status(200).json({
                status: 200,
                data: product,
                message: 'update product successfully'
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
                    message: 'delete product successfully'
                });
            } else {
                return res.status(404).json({
                    status: 404,
                    data: {},
                    message: 'not found product to delete'
                });
            }
        })
        .catch(error => {
            console.error('Lỗi:', error);
        });
});

module.exports = router;