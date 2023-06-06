import React from 'react'

const Select = ({title}) => {
  return (
    <div className="first" style={{display:'flex', flexDirection:'column', gap:'0.5em', marginRight:'1.5rem'}}>
             <div>
             <label htmlFor={title}>{title}</label><br />
              <select name={title} id={title} style={{padding:'5px 20px', borderRadius: 2}}>
              <option value="">Please select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
             </div>
              <input type="text" placeholder='comment here...' style={{marginTop:'.75rem', border: 'none', outline:'none', borderBottom:'2px solid black'}}/>
             </div>
  )
}

export default Select