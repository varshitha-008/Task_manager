const express = require('express');
const { createTeam, inviteMember, getTeamTasks } = require('../controllers/teamController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createTeam);
router.post('/:teamId/invite', authMiddleware, inviteMember);
router.get('/:teamId/tasks', authMiddleware, getTeamTasks);

module.exports = router;
