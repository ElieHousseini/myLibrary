const mongoose = require('mongoose')
const path = require('path')
// const converImageBasePath = 'uploads/bookCovers'

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
  converImage: {
    type: Buffer,
    required: true,
  },
  converImageType: {
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
  if (this.converImage != null && this.converImageType != null) {
    // return path.join('/', converImageBasePath, this.converImageName)
    return `data: ${
      this.converImageType
    };charset=utf-8;base64,${this.converImage.toString('base64')}`
  }
})

module.exports = mongoose.model('Book', bookSchema)
// module.exports.converImageBasePath = converImageBasePath
