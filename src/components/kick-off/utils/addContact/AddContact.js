import React from 'react';
import addicon from "../../../../assets/images/add.svg";
import { emptyTypeAnnotation } from '@babel/types';
import axios from 'axios';



const addContact =(props) =>(
  
    <div>

 <div id="element">
      
 <img  src={addicon} id="icon" data-toggle="modal" data-target="#myModal"></img>
 <label id="label">{props.header}</label>
 </div>


<div>
<div className="modal fade" id="myModal" role="dialog">
<div className="modal-dialog modal-lg">
<div className="modal-content">
  <div className="modal-header">
    <button type="button" className="close" data-dismiss="modal">&times;</button>
    <h4 className="modal-title" id="header1">{props.header}</h4>
  </div>
  <div className="modal-body">
  <div className="input-group input-group-sm mb-3">
         <div className="input-group-prepend">
        <span className="input-group-text " id="inputGroup-sizing-sm">{props.modal_name}</span>
         </div>
      <input type="text" className="form-control" id='name' aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
  </div>

  <div className="input-group input-group-sm mb-3">
         <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-sm">Email</span>
         </div>
      <input type="text" className="form-control" id='email' aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
  </div>

  <div className="input-group input-group-sm mb-3">
         <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-sm">Location</span>
         </div>
      <input type="text" className="form-control" id='loaction1' aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
  </div>

  <div className="input-group input-group-sm mb-3">
         <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-sm">Phone no</span>
         </div>
         <input type="text" id='phone'className="form-control" id='phone_no' aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>  
     
  </div>

  </div>
  <div className="modal-footer">
    <button type="button" className="btn btn-default" data-dismiss="modal" onClick={props.click}>Submit</button>
    <button type="button" className="btn btn-default" >Reset</button>
  </div>
</div>
</div>
</div>


</div>
</div>

)



export default addContact;