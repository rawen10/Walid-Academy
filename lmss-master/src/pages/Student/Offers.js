import React from 'react';
import './Offers.css';


const Offers = () => {
  return (
    <div className="offers-container">
     
      <div className="offer-content">
        <h2>الاشتراك السنوي</h2>
       
        <div className="offer-details">
          <h3>اشتراك سنوي في مادة الرياضيات والإيقاظ العلمي</h3>
          <p>اشترك لمدة سنة كاملة  تتيح لك هذه الباقة الوصول إلى جميع الدروس والفيديوهات والتمارين الخاصة بمادتي الرياضيات والإيقاظ العلمي</p>
          <ul>
            <li>الوصول إلى جميع الدروس المصورة</li>
            <li>تمارين واختبارات تفاعلية</li>
            <li>دعم مستمر وإجابة على جميع الأسئلة</li>
           
          </ul>
          <p> الثمن :90 دينار فقط لمدة سنة كاملة </p>
          <a href="https://www.facebook.com/profile.php?id=61561226583004&mibextid=ZbWKwL" className="subscribe-button" target="_blank" rel="noopener noreferrer">
  اشترك الآن
</a>

        </div>
      </div>
    </div>
  );
};

export default Offers;
