const mongoose = require('mongoose');

const BadgeRecordSchema = new mongoose.Schema({
  did: { type: String, required: true },
  badgeType: { type: String, required: true },
});

const BadgeRecord = mongoose.model('BadgeRecord', BadgeRecordSchema);

module.exports = BadgeRecord;
