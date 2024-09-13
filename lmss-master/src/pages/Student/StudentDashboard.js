import React from 'react';
import { useNavigate } from 'react-router-dom';

import mathImage from '../../assets/2.jpg';
import scienceImage from '../../assets/44.jpg';
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
            <h2>مادّة الرّياضيات</h2>
          </div>
          <div className="subject-card" onClick={() => handleSubjectClick('science')}>
            <img src={scienceImage} alt="Science Subject" />
            <h2>مادّة الإيقاظ العلمي</h2>
          </div>
        </div>
{/* مَّ*/}
        <div className="tips">
          <h2>محتوى المنصّة</h2>
          <ul>
            <h3>مراحل دروس الرّياضيات</h3>
            <li>🎓الحساب الذهني </li>
            <li>🎓الاستكشاف </li>
            <li>🎓التدرب</li>
            <li>🎓الإدماج</li>
            <li>🎓التقييم</li>
            
            <h3>مراحل دروس الإيقاظ العلمي</h3>
            <li>✅أتعهد مكتسباتي</li>
            <li>✅ألاحظ و أتساءل و أفترض</li>
            <li>✅أجرب و أتثبت</li>
            <li>✅أستنتج</li>
            <li>✅أطبق و أوظف</li>
            <li>✅أقيم</li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
