import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError } from './../errors/index.js'

const register = async (req, res) => {
  const { name, role, username, password } = req.body

  if (!name || !role || !password || !username) {
    throw new BadRequestError('please provide all values')
  }

  const user = await User.create(req.body)
  res.status(StatusCodes.OK).json({ user })
}

const login = (req, res) => {
  res.send('login')
}

const updateUser = (req, res) => {
  res.send('updateUser')
}

export { register, login, updateUser }
