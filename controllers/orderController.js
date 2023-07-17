import Order from './../models/Order.js'
import { StatusCodes } from 'http-status-codes'
const createOrder = async (req, res) => {
  const { uid, jenis, variasi, harga, status } = req.body

  const order = await Order.create(req.body)

  res.status(StatusCodes.OK).json({ order })
}
const getAllOrder = async (req, res) => {
  const page = parseInt(req.query.page || 0)
  const search = req.query.search || ''
  const pageSize = 10

  const total = await Order.countDocuments()

  const order = await Order.find({})
    .limit(pageSize)
    .skip(pageSize * page)

  res.status(StatusCodes.OK).json({ search, page, totalPage: Math.ceil(total / pageSize), order })
}

const updateOrder = async (req, res) => {
  const id = req.query.id
  try {
    const order = await Order.findOneAndUpdate(id)
    res.json(order)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
const deleteOrder = (req, res) => {
  res.send('delete orders')
}

export { createOrder, updateOrder, getAllOrder, deleteOrder }
