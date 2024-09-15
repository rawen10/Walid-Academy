import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LessonDetails.css';
import { useParams } from 'react-router-dom';

const LessonDetail = ({ user }) => {
  const { lessonId } = useParams(); // Get lesson ID from URL parameters
  const [lesson, setLesson] = useState(null);
  const [error, setError] = useState(null); // State to handle errors

  console.log("User access:", user?.access);

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

     
      {user?.access && lesson.urlVideo ? (
        <div className="lesson-video">
          
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
      ) : (
        !user?.access && <p>يجب عليك الاشتراك لتتمكن من المشاهدة</p>
      )}

      {/* PowerPoint Section */}
      {user?.access && lesson.urlPowerPonit ? (
        <div className="lesson-powerpoint">
          
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
        </div>
      ) : null}
    </div>
  );
};

export default LessonDetail;
