import React from 'react';
import './Offers.css';


const Offers = () => {
  return (
    <div className="offers-container">
     
      <div className="offer-content">
        <h2>الاشتراك السنوي</h2>
        <p>احصل على خصم خاص عند الاشتراك لمدة سنة كاملة في مادة الرياضيات والإيقاظ العلمي.</p>
        <div className="offer-details">
          <h3>اشتراك سنوي في مادة الرياضيات والإيقاظ العلمي</h3>
          <p>اشترك لمدة سنة كاملة واستفد من الخصم المميز. تتيح لك هذه الباقة الوصول إلى جميع الدروس والفيديوهات والتمارين الخاصة بمادتي الرياضيات والإيقاظ العلمي.</p>
          <ul>
            <li>الوصول إلى جميع الدروس المصورة.</li>
            <li>تمارين واختبارات تفاعلية.</li>
            <li>دعم مستمر وإجابة على جميع الأسئلة.</li>
            <li>شهادات إتمام عند انتهاء كل درس.</li>
          </ul>
          <button className="subscribe-button">اشترك الآن</button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
