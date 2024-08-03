import React, { useState, useEffect } from 'react';
import './App.css';
import data from './assets/data.json';
import StudentInfo from './components/StudentInfo';
import hOCStudentInfo from './components/HOCStudentInfo';

function App() {
  const [studentsData, setStudentsData] = useState([]);
  useEffect(() => {
    getStudentsData();
  }, []);

  async function getStudentsData() {
    console.log('final data :: ', data);
    let json = data?.studentsInfo;
    setStudentsData((prevData) => [...json]);
  }

  const HOCStudentComponent = hOCStudentInfo(StudentInfo);

  return (
    <div className="App">
      <h1>HOC: Higher Order Functions</h1>
      <h2>{studentsData.length}</h2>
      {studentsData.map((item, idx) =>
        item?.isTopper ? (
          <HOCStudentComponent key={idx} info={item} />
        ) : (
          <StudentInfo key={idx} info={item} />
        )
      )}
    </div>
  );
}

export default App;
