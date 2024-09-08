import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminSubjects.css';

const AdminSubjects = () => {
  const classesOptions = ['الرابعة أساسي', 'الخامسة', 'السادسة'];
  const predefinedSubjects = ['الرياضيات', 'العلوم']; // matériaux prédéfinis

  const [selectedClass, setSelectedClass] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [selectedSubjectIndex, setSelectedSubjectIndex] = useState(null);
  const [newPeriod, setNewPeriod] = useState('');
  const [selectedPeriodIndex, setSelectedPeriodIndex] = useState(null);
  const [newLesson, setNewLesson] = useState({ name: '', videoLink: '', pptLink: '' });

  // Récupérer les subjects depuis l'API lorsqu'une classe est sélectionnée
  useEffect(() => {
    if (selectedClass) {
      axios.get("http://localhost:5000/subjects")
        .then(response => {
          const initialSubjects = response.data.map(subject => ({
            ...subject,
            periods: subject.periods || []
          }));
          setSubjects(initialSubjects);
          setSelectedSubjectIndex(null);
          setSelectedPeriodIndex(null);
        })
        .catch(error => {
          console.error("Erreur lors du chargement des subjects :", error);
        });
    } else {
      setSubjects([]);
      setSelectedSubjectIndex(null);
      setSelectedPeriodIndex(null);
    }
  }, [selectedClass]);

  const handleAddPeriod = () => {
    if (newPeriod.trim() !== '') {
      const selectedSubject = subjects[selectedSubjectIndex];
      axios.post("http://localhost:5000/period", {
        name: newPeriod,
        subjectId: selectedSubject.id
      })
      .then(response => {
        const updatedSubjects = [...subjects];
        updatedSubjects[selectedSubjectIndex].periods.push(response.data);
        setSubjects(updatedSubjects);
        setNewPeriod('');
      })
      .catch(error => {
        console.error("Erreur lors de l'ajout de la période :", error);
      });
    }
  };

  const handleDeletePeriod = (periodIndex) => {
    const selectedSubject = subjects[selectedSubjectIndex];
    const periodToDelete = selectedSubject.periods[periodIndex];
  
    // Envoyer une requête DELETE à l'API pour supprimer la période
    axios.delete(`http://localhost:5000/period/${periodToDelete.id}`)
      .then(() => {
        // Mise à jour de l'état local après la suppression réussie
        const updatedSubjects = [...subjects];
        updatedSubjects[selectedSubjectIndex].periods.splice(periodIndex, 1);
        setSubjects(updatedSubjects);
        setSelectedPeriodIndex(null);
      })
      .catch(error => {
        console.error("Erreur lors de la suppression de la période :", error);
      });
  };
  

  const handleEditPeriod = (periodIndex, newName) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[selectedSubjectIndex].periods[periodIndex].name = newName;
    setSubjects(updatedSubjects);
  };

  const handleAddLesson = () => {
    const updatedSubjects = [...subjects];
    updatedSubjects[selectedSubjectIndex].periods[selectedPeriodIndex].lessons.push(newLesson);
    setSubjects(updatedSubjects);
    setNewLesson({ name: '', videoLink: '', pptLink: '' });
  };

  const handleDeleteLesson = (lessonIndex) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[selectedSubjectIndex].periods[selectedPeriodIndex].lessons.splice(lessonIndex, 1);
    setSubjects(updatedSubjects);
  };

  const handleEditLesson = (lessonIndex, updatedLesson) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[selectedSubjectIndex].periods[selectedPeriodIndex].lessons[lessonIndex] = updatedLesson;
    setSubjects(updatedSubjects);
  };

  return (
    <div className="admin-subjects-container">
      <div className="admin-subjects-content">
        <h1>إدارة المواد والفترات والدروس</h1>

        {/* Choix de la classe */}
        <div className="section">
          <h2>إدارة الفصول</h2>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="" disabled>اختر الفصل</option>
            {classesOptions.map((cls, index) => (
              <option key={index} value={cls}>{cls}</option>
            ))}
          </select>
        </div>

        {/* Gestion des subjects */}
        {selectedClass && (
          <div className="section">
            <h2>إدارة المواد</h2>
            <div className="subjects-list">
              {subjects?.map((subject, index) => (
                <div key={index} className="subject-item">
                  <h3>{subject.name}</h3>
                  <button onClick={() => setSelectedSubjectIndex(index)}>
                    إدارة الفترات
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gestion des périodes */}
        {selectedSubjectIndex !== null && (
          <div className="section">
            <h2>إدارة الفترات لمادة {subjects[selectedSubjectIndex].name}</h2>
            <input
              type="text"
              placeholder="اسم الفترة"
              value={newPeriod}
              onChange={(e) => setNewPeriod(e.target.value)}
            />
            <button onClick={handleAddPeriod}>
              إضافة الفترة
            </button>

            <div className="periods-list">
              {subjects[selectedSubjectIndex].periods?.map((period, index) => (
                <div key={index} className="period-item">
                  <input
                    type="text"
                    value={period.name}
                    onChange={(e) => handleEditPeriod(index, e.target.value)}
                  />
                  <button onClick={() => handleDeletePeriod(index)}>حذف</button>
                  <button onClick={() => setSelectedPeriodIndex(index)}>إدارة الدروس</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gestion des leçons */}
        {selectedPeriodIndex !== null && (
          <div className="section">
            <h2>
              إدارة الدروس لفترة {subjects[selectedSubjectIndex].periods[selectedPeriodIndex].name} في مادة {subjects[selectedSubjectIndex].name}
            </h2>

            <input
              type="text"
              placeholder="اسم الدرس"
              value={newLesson.name}
              onChange={(e) => setNewLesson({ ...newLesson, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="رابط فيديو الدرس (Google Drive)"
              value={newLesson.videoLink}
              onChange={(e) => setNewLesson({ ...newLesson, videoLink: e.target.value })}
            />
            <input
              type="text"
              placeholder="رابط PowerPoint الدرس (Google Drive)"
              value={newLesson.pptLink}
              onChange={(e) => setNewLesson({ ...newLesson, pptLink: e.target.value })}
            />
            <button
              onClick={() => {
                if (newLesson.name.trim() !== '') {
                  handleAddLesson();
                }
              }}
            >
              إضافة الدرس
            </button>

            <div className="lessons-list">
              {subjects[selectedSubjectIndex].periods[selectedPeriodIndex].lessons?.map((lesson, index) => (
                <div key={index} className="lesson-item">
                  <input
                    type="text"
                    value={lesson.name}
                    onChange={(e) => handleEditLesson(index, { ...lesson, name: e.target.value })}
                    placeholder="اسم الدرس"
                  />
                  <input
                    type="text"
                    value={lesson.videoLink}
                    onChange={(e) => handleEditLesson(index, { ...lesson, videoLink: e.target.value })}
                    placeholder="رابط فيديو الدرس (Google Drive)"
                  />
                  <input
                    type="text"
                    value={lesson.pptLink}
                    onChange={(e) => handleEditLesson(index, { ...lesson, pptLink: e.target.value })}
                    placeholder="رابط PowerPoint الدرس (Google Drive)"
                  />
                  <button onClick={() => handleDeleteLesson(index)}>حذف</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSubjects;
