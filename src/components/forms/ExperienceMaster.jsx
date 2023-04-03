import React from 'react'
import Navigation from './Navigation'

const ExperienceMaster = () => {
    const Submithandler = () => {}
  return (
   <>
   <Navigation />
       <h1>Faculty Experience Master</h1>
       <div className='personal'>
       <form onSubmit={Submithandler} className = 'formCss'>
      <div className='chk'>
        <h3 style={{ "margin-right": "8.65rem" }}>Organization Name</h3>
        <input type="text" id="organization_name" placeholder='Organization Name'/>
      </div>
      <hr />
      <div className='chk'>
        <h3 style={{ "margin-right": "13.1rem" }}>Designation</h3>
        <input type="text" placeholder='Designation'/>
      </div>  <hr />
      <div className='chk'>
        <h3 style={{ "margin-right": "11.25rem" }}>Date of Joining</h3>
        <input style={{ "width": "11.35rem" }} type="date" id="date_of_joining" placeholder='Date of Joining'/>
      </div>  <hr />
      <div className='chk'>
        <h3 style={{ "margin-right": "10rem" }}>Date of Relieving</h3>
        <input style={{ "width": "11.35rem" }} type="date" id="date_of_relieving" placeholder='Date of Relieving'/>
      </div>  <hr />
      <div className='chk'>
        <h3 style={{ "margin-right": "14.2rem" }}>Pay Scale</h3>
        <input type="text" id="pay"placeholder='Pay Scale'/>
      </div>  <hr />
      <div className='chk'>
        <h3 style={{ "margin-right": "9.4rem" }}>Last Salary Drawn</h3>
        <input type="text" id="last_salary_drawn" placeholder='Last Salary Drawn' />
      </div>  <hr />
      <div className='chk'>
        <h3 style={{ "margin-right": "13.7rem" }}>Job Profile</h3>
        <input type="text" id="job_profile" placeholder='Job Profile'/>
      </div>  <hr />
      <div className='chk'>
        <h3 style={{ "margin-right": "8.65rem" }}>Reason for Leaving</h3>
        <input type="text" id="reason_for_leaving" placeholder='Reason for leaving' />
      </div> 
        <button className='button' type='submit'>Save</button>
    </form>
       </div>
   </>
  )
}

export default ExperienceMaster