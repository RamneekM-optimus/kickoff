import React from 'react';
import './addProjectForm.css';

const customerSideContact=(props)=>{
    return(
        
        <div className="form-group">
         <div className="form-row col-md-4">
             <h6>{props.name}</h6>
             </div>   
            
        <div className="form-row">
        
        <div className="form-group col-md-4">
        <input type="text" className="form-control" id="inputDeliveryConName" placeholder="Name"/>
        </div>
        <div className="form-group col-md-4">
        <input type="text" className="form-control" id="deliveryConEmail" placeholder="Email"/>
        </div>
        <div className="form-group col-md-4">
        <input type="text" className="form-control" id="inputPhoneNo" placeholder="Phone Number"/>
        </div>
    </div>
        </div>
       

    )
}
export default customerSideContact;
