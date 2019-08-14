import React from 'react';
import AddCustomerPopUp from './addCustomerPopUp';
import Filter from './filterPopUp';

const Title = (props) => (
    <div class="mid">
        <div class="customeradd">
            <h2>Customer List</h2>
            <img src="https://img.icons8.com/ios-filled/50/000000/add.png" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter"/>
            <AddCustomerPopUp add={props.addcustomer}/>
        </div>
        
        <div class="activesearch">
            <p>Customer Type</p>
            <select class="bootstrap-select" onChange={props.change.bind(this)}>
                <option value="Active" >Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Any">Any</option>
            </select>
        </div>
        <div class="searchandfilter">
            <input class="form-control" type="text" onChange={props.search.bind(this)} placeholder="Search" aria-label="Search" />
            <img src="https://img.icons8.com/metro/26/000000/search-property.png" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalfilter"/>
            <Filter
               cust={props.showcustomer}/>
        </div>
    </div>
)

export default Title;