const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  personalInfo: {
    fullName: String,
    email: String,
    phone: String,
    linkedin: String,
  },
  education: [{
    school: String,
    degree: String,
    year: String,
  }],
  experience: [{
    company: String,
    role: String,
    description: String,
  }],
  webTechnologies: [String], 
  projects: [{
    title: String,
    link: String,
    description: String,
  }]
}, { timestamps: true });

module.exports = mongoose.model('Resume', resumeSchema);