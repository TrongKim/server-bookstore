const express = require('express');
const router = express.Router();

const Author = require('../models/author');

router.post('/create', (req, res) => {
    Author.create({
        id: String(Date.now()) + 'author' + String(Math.random()),
        country: req.body.country,
        language: req.body.language,
        genre: req.body.genre,
        publication_date: req.body.publication_date,
        share_us_on: req.body.share_us_on,
        name: req.body.name,
        description: req.body.description,
        story: req.body.story,
        awards: req.body.awards,
        images: req.body.images,
    })
        .then(author => {
            return res.status(200).json({
                status: 200,
                data: author,
                message: 'create author successfully'
            });
        })
        .catch(error => {
            console.error('Lỗi:', error);
        });
});

router.get('/get-one', (req, res) => {
    Author.findOne({
        where: {
            id: req.body.id
        }
    })
        .then(author => {
            return res.status(200).json({
                status: 200,
                data: author,
                message: 'get author successfully'
            });
        })
        .catch(error => {
            console.error('Lỗi:', error);
        });
});

router.post('/update', (req, res) => {
    Author.update({
        country: req.body.country,
        language: req.body.language,
        genre: req.body.genre,
        publication_date: req.body.publication_date,
        share_us_on: req.body.share_us_on,
        name: req.body.name,
        description: req.body.description,
        story: req.body.story,
        awards: req.body.awards
    },
    {
        where: {
            id: req.body.id,
        }
    })
        .then(author => {
            return res.status(200).json({
                status: 200,
                data: author,
                message: 'update author successfully'
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
                    message: 'delete author successfully'
                });
            } else {
                return res.status(404).json({
                    status: 404,
                    data: {},
                    message: 'not found author to delete'
                });
            }
        })
        .catch(error => {
            console.error('Lỗi:', error);
        });
});

module.exports = router;