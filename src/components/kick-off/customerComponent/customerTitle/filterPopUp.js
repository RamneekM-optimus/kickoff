import React,{Component} from 'react';
import './filterPopUp.css';
import {getCustomers} from '../../../../services/dataservice';


class Filter extends Component{
  constructor(props) {
    super(props);
    this.state = {
        customers:  [],
        customerList: [],
        value:''
    };
}

  // this.setState({customerList:event.});  
componentDidMount(){
    getCustomers()
     .then(customers =>{
         this.setState({customerList: customers.data});
     });
 }
 render(){
   return(
    <div class="modal" id="exampleModalfilter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content filter-customer">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Filter Records</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <div class="input-group mb-3">
        <p>Project Name:</p>
                <select class="bootstrap-select" id="custom-dropdown">
                          {this.state.customerList.map(p=>(
                              <option value={p.customerName} selected="selected">{p.customerName}</option>
                          ))}
                         
                </select><br/>
        
    <p>Created On:</p>
    <input type="date" value="2019-08-26" class="date"/>
    <p>Updated On:</p>
    <input type="date" value="2019-08-26" class="date"/>
  <br></br>
  
    
  <br></br>
  </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal" id="sub-customer" onClick={this.props.cust}>Apply</button>
        </div>
      </div>
    </div>
  </div>
   );
 }
}


export default Filter;