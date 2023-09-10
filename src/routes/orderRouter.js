const express = require ('express');
const orderRouter = express.Router();
const orderController = require ("../controllers/orderController")

orderRouter.post("/delivery", orderController.postOrder);
orderRouter.post('/pay', orderController.postPayment);
module.exports = { orderRouter };
