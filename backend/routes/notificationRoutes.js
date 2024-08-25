const express = require('express');
const { createNotification, getUserNotifications, markAsRead, markAllAsRead } = require('../controllers/notificationController');
const router = express.Router();

router.post('/', createNotification); // Create a new notification
router.get('/:userId', getUserNotifications); // Get all notifications for a user
router.put('/:notificationId/read', markAsRead); // Mark a specific notification as read
router.put('/:userId/read-all', markAllAsRead); // Mark all notifications as read for a user

module.exports = router;
