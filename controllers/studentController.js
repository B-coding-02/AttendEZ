const Student = require('../models/student');
const Class = require('../models/class');

const addStudent = async (req, res) => {
  try {
    const { name, rfid, classId } = req.body;
    const classData = await Class.findById(classId);

    if (!classData) return res.status(404).json({ error: 'Class not found' });

    const newStudent = new Student({ name, rfid, classId });
    await newStudent.save();

    classData.students.push(newStudent._id);
    await classData.save();

    res.status(201).json({ message: 'Student added successfully', student: newStudent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addStudent };
