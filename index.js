const express = require('express');
const app = express();
const compression = require('compression');
const db = require('./modules/db');


app.use(compression());

if (process.env.NODE_ENV != 'production') {
    app.use('/bundle.js', require('http-proxy-middleware')({
        target: 'http://localhost:8081/'
    }));
}

app.use(express.static('./public'));


app.get('/get-shop-products/', (req, res) => {

    db.getShopProducts()
        .then( (data) => {
            res.json({
                success: true,
                shopProducts: data
            })
            // console.log('inside the index.js', data);
        })
        .catch(err => console.log("Err in Shop Products Get request index.js",err))
})

app.get('/individual-shop-product/:id', (req, res) => {
    // console.log('index.js individual-shop-product ');
    db.getIndividualProduct(req.params.id)
        .then( (data) => {
            res.json({
                success: true,
                individualProduct: data
            })
            console.log('inside the index.js INDIVIDUAL PRODUCT', data);
        })
        .catch(err => console.log("Err in Individual Shop Get Request index.js",err))
})



//don't forget to name key value shopProducts: data rather than data: data


app.get('*', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(8080, function() {
    console.log("I'm listening.")
});
