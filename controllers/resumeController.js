const Resume = require("../models/Resume");


exports.createResume = async (req, res) => {
    try {
        const resume = await Resume.create({
            user: req.user.id, 
            ...req.body        
        });
        res.status(201).json(resume);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// This function handles fetching all resumes for the logged-in user
exports.getUserResumes = async (req, res) => {
    try {
        const resumes = await Resume.find({ user: req.user.id });
        res.json(resumes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};