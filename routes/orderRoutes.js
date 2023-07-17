import express from 'express'
const router = express.Router()

import { createOrder, updateOrder, getAllOrder, deleteOrder } from './../controllers/orderController.js'

router.route('/createOrder').post(createOrder)
router.route('/').get(getAllOrder)
router.route('/updateOrder').post(updateOrder)
export default router
