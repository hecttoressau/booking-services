const { Schema, ObjectId } = require('mongoose');

const connection = require('../drivers/mongodb/connection');
const { Chat } = require('./chat');

const Message = new Schema({
  chatId: {
    type: ObjectId,
    required: true,
    default: undefined,
    ref: Chat,
  },

  fromUserId: {
    type: String,
    required: true,
  },

  toUserId: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    lowercase: true,
    trim: true,
  },

}, { timestamps: true });

module.exports = connection.model('message', Message);
