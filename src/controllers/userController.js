const User = require('../models/User');

exports.registerUser = async (req, res) => {
  const { name, email, password, avatar } = req.body;
  try {
    const newUser = new User({ name, email, password, avatar });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserWardrobe = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('wardrobe');
    res.status(200).json(user.wardrobe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
