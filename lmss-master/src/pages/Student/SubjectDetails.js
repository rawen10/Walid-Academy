import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import mathImage from '../../assets/math.jpg';
import scienceImage from '../../assets/science.png';
import './SubjectDetails.css';

const SubjectDetails = () => {
  const { subject } = useParams();
  const navigate = useNavigate();
  const isMath = subject === 'math';

  const periods = [
    { name: 'الفترة الأولى', image: isMath ? mathImage : scienceImage },
    { name: 'الفترة الثانية', image: isMath ? mathImage : scienceImage },
    { name: 'الفترة الثالثة', image: isMath ? mathImage : scienceImage },
    { name: 'الفترة الرابعة', image: isMath ? mathImage : scienceImage },
    { name: 'الفترة الخامسة', image: isMath ? mathImage : scienceImage },
    { name: 'الفترة السادسة', image: isMath ? mathImage : scienceImage }
  ];

  const handlePeriodClick = (period) => {
    navigate(`/subject/${subject}/period/${period}`);
  };

  return (
    <div>
     
      <div className="subject-details">
        <h1>{isMath ? 'مادة الرياضيات' : 'مادة الإيقاظ العلمي'}</h1>
        <div className="periods">
          {periods.map((period, index) => (
            <div key={index} className="period-card" onClick={() => handlePeriodClick(period.name)}>
              <img src={period.image} alt={`${period.name}`} />
              <h2>{period.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectDetails;
