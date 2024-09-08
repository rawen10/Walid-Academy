import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import mathImage from "../../assets/math.jpg"; // Ensure the math image is correctly placed
import scienceImage from "../../assets/science.png"; // Ensure the science image is correctly placed
import "./Subjects.css"; // Import the CSS for the subjects
import axios from "axios";

const Subjects = () => {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState([]); // State to store subjects

  useEffect(() => {
    // Fetch the subjects from the backend
    axios
      .get("http://localhost:5000/subjects") // Adjust the URL according to your backend route
      .then((response) => {
        setSubjects(response.data); // Set the fetched subjects to state
      })
      .catch((error) => {
        console.error("Error fetching subjects:", error);
      });
  }, []);

  const handleSubjectClick = (subject) => {
    navigate(`/subject/${subject}`);
  };

  return (
    <div>
      <div className="subjects-container">
        <div className="subjects-content">
          <h2>المواد الدراسية</h2>
          <p>ابدا الدراسة الان واستفد من الدروس والتمارين التفاعلية.</p>
          <div className="subjects">
            {subjects.map((subject) => (
              <div key={subject.id} className="subject-card" onClick={() => handleSubjectClick(subject)}>
                <img 
                  src={subject.name === 'Math' ? mathImage : scienceImage} // Conditional image rendering based on subject name
                  alt={`Subject ${subject.name}`}
                />
                <h2>{subject.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
