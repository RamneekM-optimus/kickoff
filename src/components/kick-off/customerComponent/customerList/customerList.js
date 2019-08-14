import React from 'react';
import ReactDOM from 'react-dom';
import EditCustomer from '../editCustomer/editCustomer';

// const friends = [
//     { id: 1, name: 'Dave', category: 'Active', age: 50 },
//     { id: 2, name: 'Kellie', category: 'Active', age: 42 },
//     { id: 3, name: 'Max', category: 'Active', age: 12 },
//     { id: 2, name: 'Jack', category: 'Inactive', age: 12 }
// ];

const ProjectTable = (props) => (
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">Customer Name</th>
                <th scope="col">Customer Id</th>
                <th scope="col">Category</th>
                <th scope="col">Phone No.</th>
                <th scope="col">Created on</th>
                <th scope="col">Updated on</th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            {console.log(typeof props.customers)}
            {props.customers.map((p,index) => (
                 <tr key={index}>
                     <td>{p.customerName}</td>
                     <td>{p.id}</td>
                     <td>{p.category}</td>
                     <td>{p.phoneNumber}</td>
                    
                     <td>{p.createdOn}</td>
                     <td>{p.updatedOn}</td>
            <td class="edit_icon" data-toggle="modal" data-target="#exampleModalCenterEdit" onClick={<EditCustomer edit={p} in={index}/>}>Edit <img src="https://img.icons8.com/metro/26/000000/pencil.png" /></td>
                <td class="edit_icon" onClick={props.deletecustom.bind(this)}>Delete <img src="https://img.icons8.com/metro/26/000000/delete.png" /></td>
                 </tr>))}

        
           
        </tbody>
    </table>
)

export default ProjectTable;