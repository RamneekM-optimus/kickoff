import React from 'react';


const EditCustomer = (props) => (
  
    <div class="modal" id="exampleModalCenterEdit" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Edit Customer</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <div class="input-group mb-3">
    <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon3-id">Customer Id</span>
    <input type="text" class="form-control" id="custid2" value={props.edit.id} aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
    </div>
    
    
    <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon3-id">Customer Name</span>
    <input type="text" class="form-control" id="custname2" placeholder={props.edit.customerName} aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
    </div>
  
    <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon3">Phone</span>
    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" id="std-code"/>
    <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"id="std-number"/>
  </div>
  <select class="bootstrap-select">
                  <option value="1" selected="selected">Active</option>
                  <option value="2">Inactive</option>
                  <option value="3">Any</option>
    </select>
    
  <br></br>
  </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" id="sub-customer">Edit</button>
        </div>
      </div>
    </div>
  </div>
)

export default EditCustomer;