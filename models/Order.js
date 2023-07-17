import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: [true, 'Tulis UID dulu ya kak'],
    trim: true,
  },
  jenis: {
    type: String,
    trim: true,
  },
  variasi: {
    type: String,
    trim: true,
    required: [true, 'pilih variasi dulu ya kak '],
  },
  harga: {
    type: Number,
    trim: true,
    required: [true],
  },
  createdAt: {
    immutable: true,
    type: Date,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  status: {
    type: String,
    default: 'Pending',
  },
})

export default mongoose.model('Order', OrderSchema)
