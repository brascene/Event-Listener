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

app.use('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
