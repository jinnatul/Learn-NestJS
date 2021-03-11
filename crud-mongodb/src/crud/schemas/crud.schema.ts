import * as mongoose from 'mongoose';

export const CrudSchema = new mongoose.Schema({
  name: String,
  age: Number,
});