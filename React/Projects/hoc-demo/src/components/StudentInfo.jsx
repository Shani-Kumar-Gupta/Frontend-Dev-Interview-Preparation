import React from 'react';

const StudentInfo = ({ info }) => {
  return (
    <div className='infoCard'>
      <p>{info?.studentName} Details</p>
      <p>Name: {info?.studentName}</p>
      <p>Roll Number: {info?.roleNumber}</p>
      <p>Course: {info?.course}</p>
    </div>
  )
}

export default StudentInfo;