var express = require('express');
var router = express.Router();
var storeObjects = {
    items: [
        {
            name: 'Nissan Versa',
            type: 'car',
            price: 10000,
            user: 'Bob'
        },
        {
            name: 'Harry Potter',
            type: 'book',
            price: 10,
            user: 'Bob'
        },
        {
            name: 'Toyota Prius',
            type: 'phone',
            price: 20000,
            user: 'Bob'
        },
        {
            name: 'Ford Fiesta',
            type: 'phone',
            price: 10000,
            user: 'Bob'
        },
        {
            name: 'BMW 4-Series',
            type: 'phone',
            price: 40000,
            user: 'Jane'
        },
        {
            name: 'Samsung Galaxy 8',
            type: 'phone',
            price: 500,
            user: 'Jane'
        }
    ]
};
/* GET home page. */
router.get('/', function(req, res, next) {
    res.send(storeObjects);
});

module.exports = router;
