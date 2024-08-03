const hOCStudentInfo = (StudentInfo) => {
  return ({ info }) => {
    return (
      <div className="hocCard">
        <label className="topperLabel">Topper</label>
        <StudentInfo info={info} />
      </div>
    )
  }
}

export default hOCStudentInfo;

/*
- It's a Pure Function
*/