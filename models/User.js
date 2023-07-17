import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    trim: true,
    minlength: 3,
  },
  role: {
    type: String,
    required: [true, 'Please provide role'],
    trim: true,
  },
  username: {
    type: String,
    required: [true, 'Please provide username'],
    trim: true,
    minlength: 5,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    trim: true,
    minlength: 8,
  },
})

UserSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

export default mongoose.model('User', UserSchema)
