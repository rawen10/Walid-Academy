import React from 'react';
import './Help.css';

import facebookLogo from '../../assets/fb.png';
import instagramLogo from '../../assets/ig.png';
import tiktokLogo from '../../assets/tiktok.png';

const Help = () => {
  return (
   <div>

    <div className="help-container">
      
      <div className="help-content">
        <h2>مساعدة</h2>
        <p>إذا كنت بحاجة إلى مساعدة، يمكنك العثور على إجابات للأسئلة الشائعة أو الاتصال بفريق الدعم لدينا.</p>
        
        <div className="faq-section">
          <h3>الأسئلة الشائعة</h3>
          <ul>
            <li><strong>كيف يمكنني الاشتراك في المواد الدراسية؟</strong> <br/> يمكنك الاشتراك في المواد الدراسية من خلال زيارة صفحة المواد الدراسية واختيار المادة التي ترغب في الاشتراك فيها.</li>
            <li><strong>كيف يمكنني تعديل ملفي الشخصي؟</strong> <br/> يمكنك تعديل ملفك الشخصي من خلال زيارة صفحة ملفي الشخصي والنقر على زر تعديل.</li>
            <li><strong>كيف يمكنني استعادة كلمة المرور؟</strong> <br/> يمكنك استعادة كلمة المرور من خلال النقر على رابط نسيت كلمة السر؟ في صفحة تسجيل الدخول واتباع التعليمات.</li>
            <li><strong>كيف يمكنني التواصل مع الدعم الفني؟</strong> <br/> يمكنك التواصل مع الدعم الفني من خلال إرسال رسالة إلى البريد الإلكتروني: support@walidacademy.com.</li>
          </ul>
        </div>

        <div className="contact-section">
          <h3>الاتصال بنا</h3>
          <p>إذا لم تجد إجابة لسؤالك في الأسئلة الشائعة، يمكنك التواصل معنا عبر البريد الإلكتروني أو الهاتف.</p>
          <p><strong>البريد الإلكتروني:</strong> support@walidacademy.com</p>
          <p><strong>الهاتف:</strong> 123456789</p>
        </div>

        <div className="social-media-section">
          <h3>تابعنا على</h3>
          <div className="social-media-logos">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <img src={tiktokLogo} alt="TikTok" />
            </a>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Help;
