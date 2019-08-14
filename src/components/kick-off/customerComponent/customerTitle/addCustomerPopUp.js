import React from 'react';
import './addCustomerPopUp.css';

const AddCustomerPopUp = (props) => (
    <div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Add Customer</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="input-group mb-3">
  <div class="input-group-prepend">
  <span class="input-group-text" id="basic-addon3-id">Customer Id</span>
  <input type="text" class="form-control" id="custid" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
  </div>
  
  
  <div class="input-group-prepend">
  <span class="input-group-text" id="basic-addon3-id">Customer Name</span>
  <input type="text" class="form-control" id="custname" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
  </div>

  <div class="input-group-prepend">
  <span class="input-group-text" id="basic-addon3">Phone</span>
  <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" id="std-code"/>
  <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"id="std-number"/>
</div> <span class="input-group-text" id="basic-addon3-id">Customer Type</span>
<select class="bootstrap-select">
                <option value="A" selected="selected">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
  </select>
  
<br></br>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id="sub-customer" onClick={props.add.bind(this)}>Add</button>
      </div>
    </div>
  </div>
</div>
)

export default AddCustomerPopUp;