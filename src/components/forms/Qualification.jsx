import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import "../../Styles/common.css";
import data from "./data";
import Navigation from "./Navigation";
import ReadOnly from "./ReadOnly";
import EditableRow from "./EditableRow";

const Qualification = () => {
  const navigate = useNavigate();
  // const [contacts, setContacts] = useState(data)
  const [datalist, setDatalist] = useState(data);
  const [addFormData, setAddFormData] = useState({
    level: "",
    ExamDegree: "",
    SchoolCollege: "",
    University: "",
    YearOfPassing: "",
    MaximumMarks: "",
    MarksObtained: "",
    Percentage: "",
    Division: "",
    Achievement: "",
  });

  const [editFormData, setEditFormData] = useState({
    level: "",
    ExamDegree: "",
    SchoolCollege: "",
    University: "",
    YearOfPassing: "",
    MaximumMarks: "",
    MarksObtained: "",
    Percentage: "",
    Division: "",
    Achievement: "",
  });
  const [EditId, setEditId] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    console.log(newFormData);

    setAddFormData(newFormData);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const newData = {
      id: nanoid(),
      level: addFormData.level,
      ExamDegree: addFormData.ExamDegree,
      SchoolCollege: addFormData.SchoolCollege,
      University: addFormData.University,
      YearOfPassing: addFormData.YearOfPassing,
      MaximumMarks: addFormData.MaximumMarks,
      MarksObtained: addFormData.MarksObtained,
      Percentage: addFormData.Percentage,
      Division: addFormData.Division,
      Achievement: addFormData.Achievement,
    };

    const updatedData = [...datalist, newData];
    setDatalist(updatedData);
  };

  const handleEditFormChange = (e)  => {
    e.preventDefault()

    const fieldName = e.target.getAttribute('name')
    const fieldValue = e.target.value;

    const brandNewFormData = {...editFormData}
    brandNewFormData[fieldName] = fieldValue;

    setEditFormData(brandNewFormData)
  }

  const handleEditClick = (e, c) => {
    e.preventDefault();
    setEditId(c.id);

    const newFormValues = {
      level: c.level,
      ExamDegree: c.ExamDegree,
      SchoolCollege: c.SchoolCollege,
      University: c.University,
      YearOfPassing: c.YearOfPassing,
      MaximumMarks: c.MaximumMarks,
      MarksObtained: c.MarksObtained,
      Percentage: c.Percentage,
      Division: c.Division,
      Achievement: c.Achievement,
    }

    setEditFormData(newFormValues)
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedData = {
      id : EditId,
      level: editFormData.level,
      ExamDegree: editFormData.ExamDegree,
      SchoolCollege: editFormData.SchoolCollege,
      University: editFormData.University,
      YearOfPassing: editFormData.YearOfPassing,
      MaximumMarks: editFormData.MaximumMarks,
      MarksObtained: editFormData.MarksObtained,
      Percentage: editFormData.Percentage,
      Division: editFormData.Division,
      Achievement: editFormData.Achievement,
    }

    const newDataEdited = [...editedData]
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="cls1">
          <input
            type="text"
            name="level"
            required="required"
            placeholder="Level of Education"
            onChange={handleChange}
          />
          <input
            type="text"
            name="ExamDegree"
            placeholder="Exam Degree"
            onChange={handleChange}
          />
          <input
            type="text"
            name="SchoolCollege"
            placeholder="School/College"
            onChange={handleChange}
          />
          <input
            type="text"
            name="University"
            placeholder="University"
            onChange={handleChange}
          />
          <input
            type="text"
            name="YearofPassing"
            placeholder="Year of Passing"
            onChange={handleChange}
          />
        </div>
        <div className="cls1">
          <input
            type="text"
            name="MaximumMarks"
            placeholder="Maximum Marks"
            onChange={handleChange}
          />
          <input
            type="text"
            name="MarksObtained"
            placeholder="Marks Obtained"
            onChange={handleChange}
          />
          <input
            type="text"
            name="Percentage"
            placeholder="Percentage"
            onChange={handleChange}
          />
          <input
            type="text"
            name="Division"
            placeholder="Divison"
            onChange={handleChange}
          />
          <input
            type="text"
            name="Achievement"
            placeholder="Achievement"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "0.3rem",
            width: "10%",
            marginLeft: "42.8rem",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </form>
      <form>
        <table className="table">
          <thead>
            <tr>
              <th style={{ padding: "1.2rem" }}>Level</th>
              <th>Exam Degree</th>
              <th style={{ margin: "auto" }}>School/College</th>
              <th>University</th>
              <th>Year of Passing</th>
              <th>Maximum Marks</th>
              <th>Marks Obtained</th>
              <th>Percentage Marks</th>
              <th>Division</th>
              <th>Achievement</th>
            </tr>
          </thead>
          {datalist.map((c) => (
            <tbody>
              {EditId === c.id ? (
                <EditableRow editFormData = {editFormData}  handleEditFormChange = {handleEditFormChange} />
              ) : (
                <ReadOnly c={c} handleEditClick={handleEditClick} />
              )}
            </tbody>
          ))}
        </table>
      </form>
    </>
  );
};

export default Qualification;

// function Add({ setList }) {
//   const submitHandler = (e) => {
//     e.preventDefault();

//     const fieldName = e.target.getAttribute('name');
//     const fieldValue = e.target.value

//     console.log(fieldName,fieldValue)
// const level = e.target.elements.level.value
// const examDegree = e.target.elements.ExamDegree.value
// const schoolCollege = e.target.elements.SchoolCollege.value
// const university = e.target.elements.University.value
// const yearOfPassing = e.target.elements.yearOfPassing.value
// const MaximumMarks = e.target.elements.MaximumMarks.value
// const marksObtained = e.target.elements.MarksObtained.value
// const percentage = e.target.elements.Percentage.value
// const division = e.target.elements.Division.value
// const achievement = e.target.elements.Achievement.value

// const newList = {
//    id : Math.random(),
//    level,
//    examDegree,
//    schoolCollege,
//    university,
//    yearOfPassing,
//    MaximumMarks,
//    marksObtained,
//    percentage,
//    division,
//    achievement,
// }

// setList((prevList) => {

// })
//   };

//   return (

//   );
// }
/*
<form onSubmit={submithandler} >
        <div>
          <div className="chk">
            <h3>Education</h3>
            <input type="text" id="level" placeholder="Level" />
          <input type="text" id="exam_degree" placeholder="Exam Degree" />
          <input type="text" id="school" placeholder="School/College" />
          </div>
          
          <input type="text" id="university" placeholder="University" />
          <input
            type="text"
            id="year_of_passing"
            placeholder="Year of Passing"
          />
          <input type="text" id="max_marks" placeholder="Maximum Marks" />
          <input type="text" id="marks_obt" placeholder="Marks Obtained" />
          <input type="text" id="perscentage" placeholder="Percentage Marks" />
          <input type="text" id="division" placeholder="Division" />
          <input type="text" id="achievement" placeholder="Achievement" />
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>*/

/**
       * 
       * <div>
      <Navigation />
      <h1>Faculty Qualification</h1>
      <form className="adj_table">
        
        <button type="submit" className="btn_qualification" style={{textalign:"centre"}}>Add</button>
      </form>
    </div>
   
       */
