import mongoose from 'mongoose'

const schema = new mongose.Schema({
  event_id: { type: String, required: true, index: true, unique: true },
  event_type: { type: String, default: "public" },
  event_location: { type: String }
  event_description: { type String },
  event_image: { type: String }, { timestamps: true }
})

export default mongoose.model('Event', schema)
