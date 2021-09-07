const mongoose = require('mongoose')
const path = require('path')
const converImageBasePath = 'uploads/bookCovers'

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  publishDate: {
    type: Date,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  converImageName: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Author',
  },
})

bookSchema.virtual(`converImagePath`).get(function () {
  if (this.converImageName != null) {
    return path.join('/', converImageBasePath, this.converImageName)
  }
})

module.exports = mongoose.model('Book', bookSchema)
module.exports.converImageBasePath = converImageBasePath
