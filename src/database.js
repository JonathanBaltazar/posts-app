import mongoose from 'mongoose'
import { MONGODB_URI } from './config.js'

mongoose.connect(MONGODB_URI)
.then(() => console.log("database connected"))
.catch(err => console.log(err))