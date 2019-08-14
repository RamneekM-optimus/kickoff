import React from 'react';
import minus from '../../../assets/images/minus.svg';
import './milestone.css';




const mileStone=(props)=>{


return(<div className="form-row"  >
     <div className="form-group col-md-4">
         <label htmlFor="inputCity">Milestone</label>
         <input type="text" name='milestoneName'  className='form-control ' />
     </div>
     <div className="form-group col-md-4">
         <label htmlFor="inputEmail">Remarks</label>
         <input type="text" name='milestoneRemarks'  className="form-control " id="deliveryConEmail" />
     </div>
     <div className="form-group col-md-4">
         <label htmlFor="inputPhoneNo">Completion Date</label>
         <input type="date" name='milestoneCompletionDate'  className="form-control " id="completiondate" />
     </div>
     <div className="form-group col-md-4">
        <img id='min' src={minus} onClick={props.popelement.bind(props.key)} ></img>
     </div>
            </div>

)
}

export default mileStone;