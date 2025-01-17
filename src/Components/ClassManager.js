// src/components/ClassManager.js
import React, { useState, useEffect } from 'react';
import { addClass, getClasses } from '../Utils/Api';

const ClassManager = () => {
  const [classes, setClasses] = useState([]);
  const [className, setClassName] = useState('');

  // Fetch classes when the component mounts
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await getClasses();
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, []);

  // Handle adding a class
  const handleAddClass = async () => {
    try {
      const response = await addClass(className);
      setClasses([...classes, response.data.class]);
      setClassName(''); // Clear input field
    } catch (error) {
      console.error('Error adding class:', error);
    }
  };

  return (
    <div>
      <h1>Class Manager</h1>
      <input
        type="text"
        placeholder="Enter class name"
        value={className}
        onChange={(e) => setClassName(e.target.value)}
      />
      <button onClick={handleAddClass}>Add Class</button>

      <h2>Classes</h2>
      <ul>
        {classes.map((cls) => (
          <li key={cls._id}>{cls.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClassManager;
