

import data from '../../../fakeData'
import './Card.css'
const Card = () => {
  return (
    <div className='container'>
       
        {data.map((item,index)=>{
            return <div key={index} className="card-container">
                <div className="user-picture">
                    <img src={item.pic} alt="" />
                </div>
                <div className='card-content'>
                    <div className='content'>
                        <span>Name : </span>
                        <span>{item.description}</span>
                    </div>
                    <div className='content'>
                        <span>Date : </span>
                        <span>{item.Date}</span>
                    </div>
                    <div className='content'>
                        <span>Scope : </span>
                        <span>{item.Scope}</span>
                    </div>
                    <div className='content'>
                        <span>Amount : </span>
                        <span>{item.Amount}</span>
                    </div>
                </div>
                <div className='footer'>
                    <span>Status</span>
                    <button>
                    <a href="/">Pending</a>
                    </button>
                     
                </div>
            </div>
        })}
        
       
      
    </div>
  )
}

export default Card