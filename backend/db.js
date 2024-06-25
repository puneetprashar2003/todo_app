const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MONGODB_URL;
mongoose.connect(url);
const todoSchema = new mongoose.Schema({title:String,description:String,completed:Boolean});

const todo=mongoose.model('todos',todoSchema);

module.exports={
    todo
};