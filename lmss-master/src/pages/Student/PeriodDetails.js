import React from 'react';
import { Link, useParams } from 'react-router-dom';

import lessonImage from '../../assets/logo.png'; // Example lesson image
import './PeriodDetails.css';

const PeriodDetails = () => {
  const { subjectName, periodNumber } = useParams();

  const lessons = [
    { name: 'الدرس الأول', image: lessonImage },
    { name: 'الدرس الثاني', image: lessonImage },
    { name: 'الدرس الثالث', image: lessonImage },
    { name: 'الدرس الرابع', image: lessonImage },
    { name: 'الدرس الخامس', image: lessonImage },
    { name: 'الدرس السادس', image: lessonImage },
    { name: 'الدرس السابع', image: lessonImage },
    { name: 'الدرس الثامن', image: lessonImage },
  ];

  return (
    <div>
     
      <div className="period-details">
        <h1>الفترة {periodNumber} - {subjectName}</h1>
        <div className="lessons">
          {lessons.map((lesson, index) => (
            <Link
              key={index}
              to={`/subject/${subjectName}/period/${periodNumber}/lesson/${index + 1}`}
              className="lesson-card"
            >
              <img src={lesson.image} alt={lesson.name} />
              <h2>{lesson.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeriodDetails;
