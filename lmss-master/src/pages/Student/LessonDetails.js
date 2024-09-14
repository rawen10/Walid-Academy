import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LessonDetails.css';
import { useParams } from 'react-router-dom';

const LessonDetail = () => {
  const { lessonId } = useParams(); // Get lesson ID from URL parameters
  const [lesson, setLesson] = useState(null);
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch the lesson details based on the lessonId
    axios
      .get(`http://localhost:5000/lessons/${lessonId}`)
      .then((response) => {
        setLesson(response.data);
      })
      .catch((error) => {
        setError('Could not load lesson details. Please try again later.');
      });
  }, [lessonId]);

  // Function to extract the Google Drive embed link for files
  const getGoogleDriveEmbedUrl = (link) => {
    if (link) {
      const fileId = link.split('/d/')[1]?.split('/')[0];
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    return '';
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!lesson) {
    return <div>Loading...</div>;
  }

  return (
    <div className="lesson-detail-container">
      <h1>{lesson.title}</h1>

      {/* Video Section */}
      {lesson.urlVideo ? (
        <div className="lesson-video">
          <h2>Lesson Video</h2>
          <iframe
            title="lesson-video"
            src={getGoogleDriveEmbedUrl(lesson.urlVideo)}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="640"
            height="480"
          ></iframe>
        </div>
      ) : null}

      {/* PowerPoint Section */}
      {lesson.urlPowerPonit ? (
        <div className="lesson-powerpoint">
          <h2>Lesson PowerPoint</h2>
          <iframe
            title="lesson-presentation"
            src={getGoogleDriveEmbedUrl(lesson.urlPowerPonit)}
            frameBorder="0"
            allowFullScreen
            width="640"
            height="480"
            onError={(e) => {
              e.target.style.display = 'none'; // Hide iframe if loading fails
            }}
          ></iframe>
          <p>
            If the PowerPoint is not showing, you can{' '}
            <a href={lesson.urlPowerPonit} target="_blank" rel="noopener noreferrer">
              view it here
            </a>{' '}
            or download it.
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default LessonDetail;
