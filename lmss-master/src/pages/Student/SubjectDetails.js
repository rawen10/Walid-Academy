import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

import './SubjectDetails.css';

const SubjectDetails = () => {
  const { subjectId } = useParams(); // Get subject ID from route parameters
  const { state } = useLocation(); // Access passed state (subjectName)
  const navigate = useNavigate();
  const [periods, setPeriods] = useState([]); // State to store periods
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Helper function to convert Google Drive link to direct thumbnail link
  const getGoogleDriveImageLink = (urlPic) => {
    const fileIdMatch = urlPic.match(/\/file\/d\/([a-zA-Z0-9_-]+)/); // Extract the file ID from the URL
    if (fileIdMatch && fileIdMatch[1]) {
      return `https://drive.google.com/thumbnail?id=${fileIdMatch[1]}&sz=w1000`; // Convert to a direct thumbnail link
    }
    return urlPic; // If not a Google Drive link, return the original URL
  };

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
  const handlePeriodClick = (periodId) => {
    navigate(`/subject/${subjectId}/period/${periodId}`);
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
          {periods.map((period, index) => {
            const directImageUrl = getGoogleDriveImageLink(period.urlPic);
            // Log the name and URL of each period in the console
            console.log(`Period Name: ${period.name}, URL: ${period.urlPic}`);

            return (
              <div key={index} className="period-card" onClick={() => handlePeriodClick(period.name)}>
                <img 
                  src={directImageUrl} 
                  alt={`${period.name}`} 
                />
                <h2>{period.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubjectDetails;
