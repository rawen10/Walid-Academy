import React from 'react';
import { useNavigate } from 'react-router-dom';

import mathImage from '../../assets/math.jpg';
import scienceImage from '../../assets/science.png';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const navigate = useNavigate();

  const handleSubjectClick = (subject) => {
    navigate(`/subject/${subject}`);
  };

  return (
    <div>
    
      <div className="dashboard-content">
        <h1>مرحبًا بكم الآن يمكنكم التعلم</h1>
        <p className="welcome-message">يسرنا أن نرحب بكم في منصة التعلم الخاصة بنا. استمتعوا بتجربة تعليمية ممتعة ومثرية!</p>
        
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

        <div className="tips">
          <h2>نصائح للتعلم</h2>
          <ul>
            <li>دروس مصورة لكل المفاهيم الأساسية.</li>
            <li>تمارين واختبارات تفاعلية.</li>
            <li>دعم مستمر وإجابة على جميع الأسئلة.</li>
            <li>طرق جديدة و فريدة في التعلم.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
