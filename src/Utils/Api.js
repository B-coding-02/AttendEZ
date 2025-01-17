import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// Classes APIs
export const addClass = (className) => API.post('/classes/add', { name: className });
export const getClasses = () => API.get('/classes');

// Students APIs
export const addStudent = (student) => API.post('/students/add', student);

router.post('/auth/login', (req, res) => {
    const { email, password } = req.body;
    // Validate and return a token if successful
  });
  