import React from "react";

const EditableRow = ({ editFormData, handleEditFormChange }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Level"
          name="level"
          value = {editFormData.level}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Exam Degree"
          name="ExamDegree"
          value = {editFormData.ExamDegree}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="School/College"
          name="SchoolCollege"
          value = {editFormData.SchoolCollege}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="University"
          name="University"
          value = {editFormData.University}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Year Of Passing"
          name="YearofPassing"
          value = {editFormData.YearofPassing}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Maximum Marks"
          name="MaximumMarks"
          value = {editFormData.MaximumMarks}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Maximum obtained"
          name="MaximumObtained"
          value = {editFormData.MaximumObtained}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Percentage"
          name="Percentage"
          value = {editFormData.Percentage}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Division"
          name="Division"
          value = {editFormData.Division}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Achievement"
          name="Achievement"
          value = {editFormData.Achievement}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <button type = 'submit'>Save</button>
      </td>
    </tr>
  );
};

export default EditableRow;
