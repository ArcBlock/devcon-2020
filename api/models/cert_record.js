const mongoose = require('mongoose');

const CertRecordSchema = new mongoose.Schema({
  did: { type: String, required: true },
  certType: { type: String, required: true },
});

const CertRecord = mongoose.model('CertRecord', CertRecordSchema);

module.exports = CertRecord;
