const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
});

module.exports = mongoose.model('Team', teamSchema);
