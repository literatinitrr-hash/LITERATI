const express = require('express');
const User = require('../models/User');
const Point = require('../models/Point');
const { authenticate, authorize } = require('../middleware/auth');

const router = express.Router();

router.post(
  '/users/:id/points',
  authenticate,
  authorize(['admin']),     
  async (req, res) => {
    try {
      const { points, reason } = req.body;
      const targetUser = await User.findById(req.params.id);
      if (!targetUser) {
        return res.status(404).json({ success: false, msg: 'User not found' });
      }

      const point = new Point({
        userId: req.params.id,
        points,
        reason,
        givenBy: req.user._id
      });
      await point.save();

      targetUser.totalPoints += points;
      await targetUser.save();

      res.json({
        success: true,
        msg: `+${points} points added to ${targetUser.name}`,
        newTotal: targetUser.totalPoints
      });
    } catch (err) {
      res.status(500).json({ success: false, msg: err.message });
    }
  }
);

router.get(
  '/users',
  authenticate,
  authorize(['admin']),   
  async (req, res) => {
    const users = await User.find()
      .select('name email totalPoints role')
      .sort({ totalPoints: -1 });
    res.json({ success: true, users });
  }
);

router.delete(
  '/users/:userId/points',
  authenticate,
  authorize(['admin']),
  async (req, res) => {
    try {
     
      const point = await Point.findOne({ userId: req.params.userId })
        .sort({ createdAt: -1 });

      if (!point) {
        return res.status(404).json({
          success: false,
          msg: 'No points left to delete for this user'
        });
      }

      const STEP = 5;

      if (point.points < STEP) {
        return res.status(400).json({
          success: false,
          msg: 'Not enough points to delete'
        });
      }

      const user = await User.findById(req.params.userId);
      if (!user) {
        return res.status(404).json({ success: false, msg: 'User not found' });
      }

      point.points -= STEP;
      user.totalPoints -= STEP;

      if (user.totalPoints < 0) user.totalPoints = 0;

      if (point.points === 0) {
        await point.deleteOne();
      } else {
        await point.save();
      }

      await user.save();

      res.json({
        success: true,
        msg: `-${STEP} points deleted`,
        remainingInThisEntry: point.points,
        newTotal: user.totalPoints
      });
    } catch (err) {
      res.status(500).json({ success: false, msg: err.message });
    }
  }
);


module.exports = router;