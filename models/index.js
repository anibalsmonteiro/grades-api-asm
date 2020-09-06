import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;

const gradeSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true,
  },
  lastModified: {
    type: Date,
    require: true,
  },
});

db.gradeModel = mongoose.model('grades', gradeSchema, 'grades');

export { db };
