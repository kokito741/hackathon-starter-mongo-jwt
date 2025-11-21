const express = require('express');
const router = express.Router();
const auth = require('./auth-middleware');

router.get('/', (req, res) => {
  res.json({ status: 'success', message: 'API is working 🚀' });
});

// Protected example route
router.get('/profile', auth, (req, res) => {
  // auth middleware attaches userId
  res.json({ message: 'This is a protected profile route', userId: req.userId });
});

module.exports = router;
