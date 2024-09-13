import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/NavBar/header';
import Footer from '../../component/Footer/footer';
import './Home.css';
import backgroundImage from '../../assets/1.jpg'; 

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-content" id='home'>
        <div className="content-with-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
         
          <Link   to="/register" className="start-button">ابدأ الآن</Link>
        </div>
        <div id="about" className="about-section">
          <h2>من نحن؟</h2>
          <p>
            وليد أكاديمي هي منصّة تعليمية عبر الإنترنت تهدف إلى توفير دروس دعم بجودة عالية
            لطلاب المدارس في تونس. نحن نقدم مواد تعليمية تشمل الرياضيات والعلوم 
          </p>
        </div>
        <div id="platform" className="platform-section">
          <h2>المنصة</h2>
          <p>
            منصتنا توفر محتوى تعليمي شامل وموثوق عبر الإنترنت، يتضمن دروسًا بالفيديو 
            واختبارات تفاعلية وموارد إضافية للمساعدة في تعزيز الفهم لدى الطلاب 
            وتحسين أدائهم الأكاديمي.
          </p>
        </div>
        <div id="content" className="content-section">
          <h2>محتوانا</h2>
          <p>
            محتوانا يشمل مجموعة واسعة من الدروس التعليمية في مجالات مختلفة مثل الرياضيات والعلوم،
            حيث يتم تقديم الدروس بطريقة تفاعلية وجذابة تساعد الطلاب على الفهم والتعلم بشكل أفضل.
          </p>
        </div>
        <div id="offers" className="offers-section">
          <h2>عروضنا</h2>
          <p>
            يمكن أن تشترك  سنويًا للوصول إلى جميع الدروس والموارد التعليمية 
            على منصتنا. نقدم خطة اشتراك مرنة لتناسب احتياجاتك.
          </p>
          <div className="subscription-plans">
           
            <div className="plan">
              <h3>الاشتراك السنوي</h3>
             
              <Link to="/login" className="subscribe-button">اشترك الآن</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
