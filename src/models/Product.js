const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  customizationOptions: {
    colors: [String],
    sizes: [String],
    fabrics: [String],
  },
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model('Product', ProductSchema);
