import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SubjectDetails = ({ subjectId, token }) => {
  const [periods, setPeriods] = useState([]);
  const [error, setError] = useState('');

  // Function to fetch periods for a specific subject
  const fetchPeriods = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/subjects/${subjectId}/periods`, {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in the headers
        },
      });
      setPeriods(response.data);
    } catch (err) {
      setError('Error fetching periods');
      console.error('Error fetching periods:', err);
    }
  };

  useEffect(() => {
    if (subjectId) {
      fetchPeriods();
    }
  }, [subjectId]);

  return (
    <div>
      <h1>Subject Details</h1>
      {error && <p>{error}</p>}
      <ul>
        {periods.map((period) => (
          <li key={period.id}>
            <h3>{period.name}</h3>
            <img src={period.urlPic} alt={period.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectDetails;
