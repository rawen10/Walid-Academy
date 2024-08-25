import React from 'react';
import { useNavigate } from 'react-router-dom';

import mathImage from '../../assets/math.jpg'; // Ensure the math image is correctly placed
import scienceImage from '../../assets/science.png'; // Ensure the science image is correctly placed
import './Subjects.css'; // Import the CSS for the subjects

const Subjects = () => {
  const navigate = useNavigate();

  const handleSubjectClick = (subject) => {
    navigate(`/subject/${subject}`);
  };

  return (
    <div>
   
      <div className="subjects-container">
        <div className="subjects-content">
          <h2>المواد الدراسية</h2>
          <p>ابدا الدراسة الان  واستفد من الدروس والتمارين التفاعلية.</p>
          <div className="subjects">
            <div className="subject-card" onClick={() => handleSubjectClick('math')}>
              <img src={mathImage} alt="Math Subject" />
              <h2>مادة الرياضيات</h2>
            </div>
            <div className="subject-card" onClick={() => handleSubjectClick('science')}>
              <img src={scienceImage} alt="Science Subject" />
              <h2>مادة الإيقاظ العلمي</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
