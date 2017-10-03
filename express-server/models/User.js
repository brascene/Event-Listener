import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  user_id: { type: String, required: true, index: true, unique: true },
  user_type: { type: String, default: "public" },
  user_email: { type String, required: true, lowercase: true, index: true, unique: true },
  passwordHash: { type: String, required: true },
  image: { type: String }
})

export default mongoose.model('User', schema)
