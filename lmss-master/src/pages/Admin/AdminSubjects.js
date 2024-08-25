import React, { useState } from 'react';
import { FileUpload } from 'primereact/fileupload';
import './AdminSubjects.css';

const AdminSubjects = () => {
  const classesOptions = ['الرابعة اساسي', 'الخامسة', 'السادسة'];
  const [selectedClass, setSelectedClass] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState('');
  const [selectedSubjectIndex, setSelectedSubjectIndex] = useState(null);
  const [newPeriod, setNewPeriod] = useState('');
  const [selectedPeriodIndex, setSelectedPeriodIndex] = useState(null);
  const [newLesson, setNewLesson] = useState({ name: '', videoLink: '', pptLink: '' });

  const handleAddSubject = () => {
    if (selectedClass) {
      setSubjects([...subjects, { className: selectedClass, name: newSubject, periods: [] }]);
      setNewSubject('');
    }
  };

  const handleDeleteSubject = (index) => {
    setSubjects(subjects.filter((_, i) => i !== index));
    setSelectedSubjectIndex(null);
    setSelectedPeriodIndex(null);
  };

  const handleEditSubject = (index, newName) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index].name = newName;
    setSubjects(updatedSubjects);
  };

  const handleAddPeriod = () => {
    const updatedSubjects = [...subjects];
    updatedSubjects[selectedSubjectIndex].periods.push({ name: newPeriod, lessons: [] });
    setSubjects(updatedSubjects);
    setNewPeriod('');
  };

  const handleDeletePeriod = (periodIndex) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[selectedSubjectIndex].periods.splice(periodIndex, 1);
    setSubjects(updatedSubjects);
    setSelectedPeriodIndex(null);
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

  const handleFileUpload = (event, type) => {
    console.log(`Uploading ${type}`);
    customBase64Uploader(event, type);
  };

  const customBase64Uploader = async (event, type) => {
    const file = event.files[0];
    const reader = new FileReader();
    let blob = await fetch(file.objectURL).then((r) => r.blob());

    reader.readAsDataURL(blob);

    reader.onloadend = function () {
      const base64data = reader.result;
      console.log(`${type} uploaded successfully as base64.`);
    };
  };

  return (
    <div className="admin-subjects-container">
      <div className="admin-subjects-content">
        <h1>إدارة المواد والفترات والدروس</h1>

        {/* Class Selection */}
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

        {/* Subject Management */}
        {selectedClass && (
          <div className="section">
            <h2>إدارة المواد</h2>
            <input
              type="text"
              placeholder="اسم المادة"
              value={newSubject}
              onChange={(e) => setNewSubject(e.target.value)}
            />
            <button onClick={handleAddSubject}>إضافة المادة</button>
            
            {/* Upload Image for Subject */}
            <div className="upload-section">
              <h3>تحميل صورة المادة</h3>
              <FileUpload 
                mode="basic" 
                name="subject-image" 
                accept="image/*" 
                customUpload 
                uploadHandler={(e) => handleFileUpload(e, 'صورة المادة')} 
              />
            </div>
            
            <div className="subjects-list">
              {subjects
                .filter(subject => subject.className === selectedClass)
                .map((subject, index) => (
                  <div key={index} className="subject-item">
                    <input
                      type="text"
                      value={subject.name}
                      onChange={(e) => handleEditSubject(index, e.target.value)}
                    />
                    <button onClick={() => handleDeleteSubject(index)}>حذف</button>
                    <button onClick={() => setSelectedSubjectIndex(index)}>اختر</button>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Period Management */}
        {selectedSubjectIndex !== null && (
          <div className="section">
            <h2>إدارة الفترات لمادة {subjects[selectedSubjectIndex].name}</h2>
            <input
              type="text"
              placeholder="اسم الفترة"
              value={newPeriod}
              onChange={(e) => setNewPeriod(e.target.value)}
            />
            <button onClick={handleAddPeriod}>إضافة الفترة</button>

            {/* Upload Image for Period */}
            <div className="upload-section">
              <h3>تحميل صورة الفترة</h3>
              <FileUpload 
                mode="basic" 
                name="period-image" 
                accept="image/*" 
                customUpload 
                uploadHandler={(e) => handleFileUpload(e, 'صورة الفترة')} 
              />
            </div>

            <div className="periods-list">
              {subjects[selectedSubjectIndex].periods.map((period, index) => (
                <div key={index} className="period-item">
                  <input
                    type="text"
                    value={period.name}
                    onChange={(e) => handleEditPeriod(index, e.target.value)}
                  />
                  <button onClick={() => handleDeletePeriod(index)}>حذف</button>
                  <button onClick={() => setSelectedPeriodIndex(index)}>اختر</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lesson Management */}
        {selectedPeriodIndex !== null && (
          <div className="section">
            <h2>إدارة الدروس لفترة {subjects[selectedSubjectIndex].periods[selectedPeriodIndex].name} في مادة {subjects[selectedSubjectIndex].name}</h2>

            <input
              type="text"
              placeholder="اسم الدرس"
              value={newLesson.name}
              onChange={(e) => setNewLesson({ ...newLesson, name: e.target.value })}
            />

            {/* Upload Image for Lesson */}
            <div className="upload-section">
              <h3>تحميل صورة الدرس</h3>
              <FileUpload 
                mode="basic" 
                name="lesson-image" 
                accept="image/*" 
                customUpload 
                uploadHandler={(e) => handleFileUpload(e, 'صورة الدرس')} 
              />
            </div>

            {/* Upload Video for Lesson */}
            <div className="upload-section">
              <h3>تحميل فيديو الدرس</h3>
              <FileUpload 
                mode="basic" 
                name="lesson-video" 
                accept="video/*" 
                customUpload 
                uploadHandler={(e) => handleFileUpload(e, 'فيديو الدرس')} 
              />
            </div>

            {/* Upload PowerPoint for Lesson */}
            <div className="upload-section">
              <h3>تحميل عرض PowerPoint للدرس</h3>
              <FileUpload 
                mode="basic" 
                name="lesson-ppt" 
                accept=".ppt,.pptx" 
                customUpload 
                uploadHandler={(e) => handleFileUpload(e, 'عرض PowerPoint')} 
              />
            </div>

            <button onClick={handleAddLesson}>إضافة الدرس</button>
            
            <div className="lessons-list">
              {subjects[selectedSubjectIndex].periods[selectedPeriodIndex].lessons.map((lesson, index) => (
                <div key={index} className="lesson-item">
                  <input
                    type="text"
                    value={lesson.name}
                    onChange={(e) => handleEditLesson(index, { ...lesson, name: e.target.value })}
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
