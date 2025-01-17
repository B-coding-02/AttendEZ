// controllers/classController.js
const Class = require('../models/class');

const getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching classes', error });
  }
};

const addClass = async (req, res) => {
  const { name, section } = req.body;
  try {
    const newClass = new Class({ name, section });
    await newClass.save();
    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({ message: 'Error adding class', error });
  }
};

const deleteClass = async (req, res) => {
  try {
    await Class.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Class deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting class', error });
  }
};

module.exports = { getAllClasses, addClass, deleteClass };
