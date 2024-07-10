const WardrobeItem = require('../models/WardrobeItem');
const User = require('../models/User');

exports.addToWardrobe = async (req, res) => {
  const { userId, productId, customizedDetails } = req.body;
  try {
    const newWardrobeItem = new WardrobeItem({ user: userId, product: productId, customizedDetails });
    await newWardrobeItem.save();

    const user = await User.findById(userId);
    user.wardrobe.push(newWardrobeItem);
    await user.save();

    res.status(201).json(newWardrobeItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getWardrobeItem = async (req, res) => {
  try {
    const wardrobeItem = await WardrobeItem.findById(req.params.wardrobeItemId).populate('product');
    res.status(200).json(wardrobeItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
