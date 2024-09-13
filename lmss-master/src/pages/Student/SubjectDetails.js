import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom'; // Import useLocation to get state data
import axios from 'axios';

import mathImage from '../../assets/math.jpg';
import scienceImage from '../../assets/science.png';
import './SubjectDetails.css';

const SubjectDetails = () => {
  const { subjectId } = useParams(); // Get subject ID from route parameters
  const { state } = useLocation(); // Access passed state (subjectName)
  const navigate = useNavigate();
  const [periods, setPeriods] = useState([]); // State to store periods
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch periods from the backend
  useEffect(() => {
    const fetchPeriods = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/subjects/${subjectId}`);
        setPeriods(response.data.periods); // Store periods in state
        setLoading(false); // Turn off loading state
      } catch (err) {
        console.error("Error fetching periods:", err);
        setError("Failed to fetch periods");
        setLoading(false); // Turn off loading even in case of error
      }
    };

    fetchPeriods();
  }, [subjectId]);

  // Handle period click to navigate to the period details page
  const handlePeriodClick = (periodName) => {
    navigate(`/subject/${subjectId}/period/${periodName}`);
  };

  if (loading) {
    return <div>Loading periods...</div>; // Show loading message while data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if request fails
  }

  return (
    <div>
      <div className="subject-details">
        <h1>{state?.subjectName || 'Subject Details'}</h1> {/* Display subject name from state */}
        <div className="periods">
          {periods.map((period, index) => (
            <div key={index} className="period-card" onClick={() => handlePeriodClick(period.name)}>
              <img src={subjectId === '1' ? mathImage : scienceImage} alt={`${period.name}`} />
              <h2>{period.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectDetails;
