const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")("sk_test_51IMZXfLG0tzVt350om2vguDUj2vObthRMIW7RC6gxqYdFsOl5bJtdTefS4piR9ISeS3VydEFJliOzftAltamNmvG00QtDjUcmM")

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('Hello World'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr"
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app)