import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './PeriodDetails.css';

const PeriodDetails = () => {
  const { periodId } = useParams(); // Get period ID from route parameters
  const navigate = useNavigate();
  const [lessons, setLessons] = useState([]); // State to store lessons
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [subjectName, setSubjectName] = useState(''); // State to store subject name
  const [subjectId, setSubjectId] = useState(null); // State to store subject ID
  const [periodName, setPeriodName] = useState(''); // State to store period name

  // Helper function to convert Google Drive link to direct thumbnail link
  const getGoogleDriveImageLink = (urlPic) => {
    const fileIdMatch = urlPic?.match(/\/file\/d\/([a-zA-Z0-9_-]+)/); // Extract the file ID from the URL
    if (fileIdMatch && fileIdMatch[1]) {
      return `https://drive.google.com/thumbnail?id=${fileIdMatch[1]}&sz=w1000`; // Convert to a direct thumbnail link
    }
    return urlPic; // If not a Google Drive link, return the original URL
  };

  // Fetch lessons and period details from the backend for the given period
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/period/${periodId}`);
        console.log("id", periodId);
        if (response.data) {
          setLessons(response.data.lessons || []); // Store lessons in state
          setSubjectName(response.data.subject?.name || 'Unknown Subject');
          setSubjectId(response.data.subject?.id || null); // Get the subjectId for the new URL structure
          setPeriodName(response.data.name || `الفترة ${periodId}`); // Set the period name from the response
        }
        setLoading(false); // Turn off loading state
      } catch (err) {
        console.error("Error fetching lessons:", err);
        setError("Failed to fetch lessons");
        setLoading(false); // Turn off loading even in case of error
      }
    };

    fetchLessons();
  }, [periodId]);

  // Handle lesson click to navigate to the lesson details page
  const handleLessonClick = (lessonId) => {
      navigate(`/lesson/${lessonId}`);
  };

  if (loading) {
    return <div>Loading lessons...</div>; // Show loading message while data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if request fails
  }

  if (lessons.length === 0) {
    return <div style={{marginTop:300, marginLeft:100}}>No lessons available for this period.</div>;
  }

  return (
    <div>
      <div className="period-details">
        <h1>{periodName} </h1> {/* Display period name instead of periodId */}
        <div className="lessons">
          {lessons.map((lesson, index) => {
            const directImageUrl = getGoogleDriveImageLink(lesson.urlPic);

            return (
              <div 
                key={index} 
                className="lesson-card" 
                onClick={() => handleLessonClick(lesson.id)}
              >
                <img src={directImageUrl} alt={lesson.title} />
                <h2>{lesson.title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PeriodDetails;
