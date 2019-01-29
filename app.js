const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const expressValidator = require('express-validator');
const { check } = require('express-validator/check')
// const { body } = require('express-validator/check');
// const { sanitizeBody } = require('express-validator/filter');

const pizzaFile = require('./pizza.json');
const orderPage = require('./order.json');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(expressValidator()); //always before bodyParser
app.use(session({
    secret: 'keyboard'
})); //use the session middleware
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Create your own',
        subtitle: 'Create your ideal pizza',
        pizzaFile: pizzaFile,
        error: req.session.errors
    });
});

app.post('/confirmation', [
    check('phone').isNumeric(),
    check('quantity').isNumeric()
], (req, res) => {
    req.session.size = req.body.size
    req.session.crust = req.body.crust
    req.session.sauce = req.body.sauce
    req.session.cheese = req.body.cheese
    req.session.meat = req.body.meat
    req.session.vegie = req.body.vegie
    req.session.phone = req.body.phone
    req.session.address = req.body.address
    req.session.quantity = req.body.quantity
    const size = req.session.size
    const crust = req.session.crust
    const sauce = req.session.sauce
    const cheese = req.session.cheese
    const meat = req.session.meat
    const vegie = req.session.vegie
    const phone = req.session.phone
    const address = req.session.address
    const quantity = req.session.quantity

    req.checkBody('size', 'Choose pizza size').notEmpty();
    req.checkBody('crust', 'Choose pizza crust').notEmpty();
    req.checkBody('sauce', 'Choose pizza sauce').notEmpty();
    req.checkBody('cheese', 'Choose cheese type').notEmpty();
    req.checkBody('phone', 'phone number is require').notEmpty();
    req.checkBody('address', 'address is require').notEmpty();
    req.checkBody('quantity', 'quantity is require').notEmpty();

    var errors = req.validationErrors();
    if (errors) {
        req.session.errors = errors;
        req.session.success = false;
        res.redirect('/');
        console.log(errors)
    } else {
        res.render('confirmation', {
            title: 'You have added',
            sizeType: size,
            crustType: crust,
            cheeseType: cheese,
            sauceType: sauce,
            meatType: meat,
            vegieType: vegie,
            quantity: quantity
        });
    }
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});