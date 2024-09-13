import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import pic1 from "../../assets/2.jpg"; // Image for الرياضيات (Math in Arabic)
import pic2 from "../../assets/44.jpg"; // Image for other subjects
import "./Subjects.css"; // CSS for styling
import axios from "axios";

const Subjects = () => {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState([]); // State to store subjects

  useEffect(() => {
    // Fetch subjects from backend
    axios
      .get("http://localhost:5000/subjects") // API endpoint
      .then((response) => {
        setSubjects(response.data); // Set subjects data to state
        console.log("Fetched subjects:", response.data); // Log subjects to console
      })
      .catch((error) => {
        console.error("Error fetching subjects:", error); // Handle error
      });
  }, []);

  console.log("subjects", subjects);

  const handleSubjectClick = (subjectId, subjectName) => {
    // Navigate to the specific subject's periods, passing the subject's ID and name
    navigate(`/subject/${subjectId}/periods`, { state: { subjectName } });
  };

  return (
    <div>
      <div className="subjects-container">
        <div className="subjects-content">
          <h2>المواد الدراسية</h2>
          <p>ابدا الدراسة الان واستفد من الدروس والتمارين التفاعلية.</p>
          <div className="subjects">
            {subjects.map((subject) => (
              <div
                key={subject.id}
                className="subject-card"
                onClick={() => handleSubjectClick(subject.id, subject.name)} // Pass subject ID and name
              >
                <img
                  src={subject.name === "الرياضيات" ? pic1 : pic2} // Conditional image rendering based on subject name
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