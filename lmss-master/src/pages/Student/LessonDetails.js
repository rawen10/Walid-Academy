import React from 'react';
import { useParams } from 'react-router-dom';

import './LessonDetails.css';

const LessonDetails = () => {
  const { subjectName, periodNumber, lessonNumber } = useParams();

  return (
   <div>
     
    <div className="lesson-details">
      
      <div className="content">
        <h1>الدرس {lessonNumber} من {subjectName} - الفترة {periodNumber}</h1>
        <div className="video-container">
          <iframe
            title="lesson-video"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="powerpoint-container">
          <iframe
            title="lesson-presentation"
            src="https://docs.google.com/presentation/d/e/2PACX-1vS5cMpS18c-GfWdu_3MS_lyvW53541fDkefXDhgJ6CiVlITOtGgpWQ32aVDIcLOog/embed?start=false&loop=false&delayms=3000"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
   </div>
  );
};

export default LessonDetails;
