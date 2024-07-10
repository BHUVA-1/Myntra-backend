const mongoose = require('mongoose');

const WardrobeItemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  customizedDetails: {
    color: String,
    size: String,
    fabric: String,
  },
});

module.exports = mongoose.model('WardrobeItem', WardrobeItemSchema);
