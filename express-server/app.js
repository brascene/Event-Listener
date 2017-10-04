import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Promise from 'bluebird'
import dotenv from 'dotenv'

dotenv.config()

mongoose.Promise = Promise
mongoose.connect(process.env.MONGODB_URL, {
  useMongoClient: true
})

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.use(express.static('build'));

app.listen(port, () => console.log(`Listening on port ${port}`));
