import React from 'react'
import Navigation from './Navigation'

const Phd = () => {
    const submithandler = () => {}
  return (
    <>
    <Navigation />

<h1>Faculty PHD Qualification</h1>
<form onSubmit={submithandler} className='formCss'>
  <div className='personal'>
    <div className = 'chk'>
      <h3 style={{ "margin-right": "8.65rem" }}>College Department</h3>
      <input type="text" id="department" placeholder='College Department' />
    </div>
    <hr />
    <div className='chk'>
      <h3 style={{ "margin-right": "14.7rem" }}>University</h3>
      <input type="text" placeholder='University' />
    </div> <hr />
    <div className='chk'>
      <h3 style={{ "margin-right": "16.7rem" }}>Status</h3>
      <input type="text" id="status" placeholder='Status' />
    </div> <hr />
    <div className='chk'>
      <h3 style={{ "margin-right": "12rem" }}> Date of Award</h3>
      <input type="text" id="award" placeholder='Date of Award' />
    </div> <hr />
    <div className='chk'>
      <h3 style={{ "margin-right": "14rem" }}>Thesis title</h3>
      <input type="text" id="thesis"  placeholder='Thesis title'/>
    </div> <hr />
    <div className='chk'>
      <h3 style={{ "margin-right": "10rem" }}>Registration Date</h3>
      <input type="text" id="registration" placeholder='Registration Date' />
    </div> <hr />
    <div className='chk'>
      <h3 style={{ "margin-right": "6.2rem" }}>Thesis Submission Date</h3>
      <input type="text" id="thesis_submission" placeholder='Thesis Submission Date' /> 
    </div> <hr />
    <div className='chk'>
      <h3 style={{ "margin-right": "8.1rem" }}>Detail of Supervisors</h3>
      <input type="text" id="supervisor" placeholder='Detail of Supervisors' />
    </div>
    <button className='button' type='submit'>Save</button>
  </div>
</form>
    </>
  )
}

export default Phd