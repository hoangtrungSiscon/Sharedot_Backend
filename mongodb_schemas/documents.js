const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  documentid: { type: Number, required: true },
  mainsubjectid: { type: Number, required: true },
  mainsubjectname: { type: String, required: true },
  categoryid: { type: Number, required: true },
  categoryname: { type: String, required: true },
  subcategoryid: { type: Number, required: true },
  subcategoryname: { type: String, required: true },
  chapterid: { type: Number, required: true },
  chaptername: { type: String, required: true },
  filetype: { type: String, required: true },
  filesize: { type: Number, required: true },
  accesslevel: { type: String, required: true },
  status: { type: String, required: true },
  viewcount: { type: Number, default: 0 },
  likecount: { type: Number, default: 0 },
  pointcost: { type: Number, default: 0 },
  description: { type: String },
  tags: { type: [String], default: [] },
  allowedUsers: { type: [Number], default: [] },
  author: { type: String },
  uploaddate: { type: Date, default: () => Date.now() },
  filepath: { type: String },
  thumbnailpath: { type: String },
  isactive: { type: Number, required: true, default: 1 },
  uploaderid: { type: Number, required: true },
  uploadername: { type: String },
  uploaderusername: { type: String },
  slug: { type: String, unique: true, required: true },
}, {
  timestamps: true
});

const Document = mongoose.model('Document', DocumentSchema);

module.exports = Document;