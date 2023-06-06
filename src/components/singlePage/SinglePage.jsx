import avatar from '../../assets/avatar.png'
import './SinglePage.css'
import Select from '../Select'
const SinglePage = () => {
  // let names = [{id:1, name:'ram'},{id:2, email:'example@gmail.com'}]
  let names = 'ram'
  return (
    <div className='single-container'>
      <div className="wrapper">
        <div className="img">
          <img src={avatar} alt="Avatar" />
          <div className="content" >
            <p> Fullname: <span>{names}</span></p>
            <p> Fullname: <span>{names}</span></p>
            <p> Fullname: <span>{names}</span></p>
            <p> Fullname: <span>{names}</span></p>
            <p> Fullname: <span>{names}</span></p>
            <p> Fullname: <span>{names}</span></p>
            <p> Fullname: <span>{names}</span></p>
            <p> Fullname: <span>{names}</span></p>
            <p> Fullname: <span>{names}</span></p>
            <p> Fullname: <span>{names}</span></p>
            <p> Fullname: <span>{names}</span></p>
            <p> Fullname: <span>{names}</span></p>

          </div>
        </div>
        
        {/* <div className="info">
          <div className="content" style={{display:'flex', flexDirection:'column', gap:'.5rem'}}>
            <p> Fullname: <span>{names}</span></p>
            <p> Fullname: <span>{names}</span></p>
            <p> Fullname: <span>{names}</span></p>
            <p> Fullname: <span>{names}</span></p>
            <p> Fullname: <span>{names}</span></p>
            <p> Fullname: <span>{names}</span></p>
            <p> Fullname: <span>{names}</span></p>
            <p> Fullname: <span>{names}</span></p>
            <p> Fullname: <span>{names}</span></p>
            <p> Fullname: <span>{names}</span></p>
            <p> Fullname: <span>{names}</span></p>
            <p> Fullname: <span>{names}</span></p>

          </div> */}
          <form className="approval">
            <div className="hod" style={{display:'flex', gap:'1.3rem', marginBottom:'1.5rem'}}>
             <Select title="Disbursement"/>
             <Select title="HOD's Approval"/> 
            </div>
            <div className="hod" style={{display:'flex', gap:'1.3rem', marginBottom:'1.5rem'}}>
             <Select title="Disbursement"/>
             <Select title="HOD's Approval"/> 
            </div>
            {/* <div className="pdapproval" style={{display:'flex', marginBottom:20}}>
             <div className="first" >
             <label htmlFor="PDApproval">PD Approval</label><br />
              <select name="PDApproval" id="disbursement">
              <option value="">select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
             </div>
             <div className="second">
             <label htmlFor="projectManagerApproval">projectManagerApproval</label><br />
              <select name="projectManagerApproval" id="projectManagerApproval">
              <option value="">select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
             </div>
              
            </div> */}
            {/* <textarea name="comment" id="comment" cols="50" rows="10" placeholder='comments...'></textarea>
            <br /> */}
            <button id='btn' style={{}}>Submit</button>
          </form>
          
        </div>
      </div>
    
  )
}

export default SinglePage