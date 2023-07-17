import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.0lxiqdr.mongodb.net/topup-db?retryWrites=true&w=majority')
    console.log('MongoDB Connected')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

export default connectDB
