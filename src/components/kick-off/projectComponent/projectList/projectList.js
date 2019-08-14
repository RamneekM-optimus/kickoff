import React from 'react';
import './projectList.css';
import {NavLink} from 'react-router-dom';

const projectList =(props)=>{
return(
<table className="table table-borderless table-striped">
  <thead className="thead">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Customer</th>
      <th scope="col">Verified</th>
      <th scope="col">Created On</th>
      <th scope="col">Updated On</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {
    props.projects.map((projects,index)=>{
                return  <tr key={index}>
                    <td >{projects.id}</td>
                    <td>{projects.name}</td>
                    <td>{projects.customerId}</td>
                    <td>{String(projects.isVerified)==='true'?'Yes':'No'}</td>
                    <td>{projects.createdOn}</td>
                    <td>{projects.updatedOn}</td>
                    <td><NavLink to='/EditProject'><i className='fas fa-pen'></i></NavLink></td>
                    <td><i className="material-icons" onClick={props.click.bind(this,index)}>delete</i></td>
                </tr> 
                } )
    }
  </tbody>
</table>
)
};
export default projectList;