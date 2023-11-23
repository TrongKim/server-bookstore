const express = require('express');
const router = express.Router();

const New = require('../models/new');

router.post('/create', (req, res) => {
    New.create({
        id: String(Date.now()) + 'new' + String(Math.random()),
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        author_id: req.body.author_id
    })
        .then(new_data => {
            return res.status(200).json({
                status: 200,
                data: new_data,
                message: 'create new_data successfully'
            });
        })
        .catch(error => {
            console.error('Lỗi:', error);
        });
});

router.get('/get-all', (req, res) => {
    New.findAll()
        .then(new_data => {
            return res.status(200).json({
                status: 200,
                data: new_data,
                message: 'get news successfully'
            });
        })
        .catch(error => {
            console.error('Lỗi:', error);
        });
});

router.get('/get-by-query', (req, res) => {
    if (!req.query.search_query) {
        return req.status(404).json({
            status: 404,
            data: {},
            message: 'not found search query'
        });
    }
    New.findAll({
        where: {
            [Op.iLike]: `%${req.query.search_query}%`,
        }
    })
        .then(new_data => {
            return res.status(200).json({
                status: 200,
                data: new_data,
                message: 'get news successfully'
            });
        })
        .catch(error => {
            console.error('Lỗi:', error);
        });
});

router.get('/get-one', (req, res) => {
    New.findOne({
        where: {
            id: req.body.id
        }
    })
        .then(new_data => {
            return res.status(200).json({
                status: 200,
                data: new_data,
                message: 'get new successfully'
            });
        })
        .catch(error => {
            console.error('Lỗi:', error);
        });
});

router.post('/update', (req, res) => {
    New.update({
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
        .then(new_data => {
            return res.status(200).json({
                status: 200,
                data: new_data,
                message: 'update new successfully'
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
                    message: 'delete new successfully'
                });
            } else {
                return res.status(404).json({
                    status: 404,
                    data: {},
                    message: 'not found new to delete'
                });
            }
        })
        .catch(error => {
            console.error('Lỗi:', error);
        });
});

module.exports = router;