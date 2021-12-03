const { default: reducers } = require("../client/src/reducers/index.js");
const keys = require("../config/key");
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = app => {
    app.post('/api/stripe', (req, res) => {
        console.log(req.body);
    } )
}

