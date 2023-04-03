import React from 'react'
import '../../Styles/form.css';

const ReadOnly = ({c , handleEditClick}) => {
  return (
         <tr className='table'>
              <td>{c.level}</td>
              <td>{c.ExamDegree}</td>
              <td>{c.SchoolCollege}</td>
              <td>{c.University}</td>
              <td>{c.YearOfPassing}</td>
              <td>{c.MaximumMarks}</td>
              <td>{c.MarksObtained}</td>
              <td>{c.Percentage}</td>
              <td>{c.Division}</td>
              <td>{c.Achievement}</td>
              <td>
                <div>
                  <button
                    style={{
                      textAlign: "center",
                      marginTop: 0,
                      paddingTop: 0,
                      border: "none",
                      backgroundColor: "white",
                      paddingRight: "4rem",
                      paddingBottom: "0",
                      cursor : 'pointer'
                    }}
                    type = 'button'
                    onClick={(e) => handleEditClick(e,c)}
                  >
                    Update
                  </button>
                </div>
                <button
                  style={{
                    paddingTop: 0,
                    border: "none",
                    backgroundColor: "white",
                    paddingRight: "3.2rem",
                    cursor : 'pointer'
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
  )
}

export default ReadOnly