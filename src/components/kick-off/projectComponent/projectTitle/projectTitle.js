import React from 'react';
import './projectTitle.css';
import SearchProject from '../searchProject/searchProject'
import add from '../../../../assets/images/add.svg';
import {NavLink} from 'react-router-dom';

const projectTitle=(props)=>{
  return(
  <div className="mid"> 
  <div className='add-project'>
    <div > <NavLink to='/addproject'><img src={add} alt="Add"></img></NavLink>
      <h5>Add Project</h5>
    </div>
    </div>
    <div className="active-search">
      <p>Project Type </p>
      <select  className="dropdown" onChange={props.change}>
        <option value="active"  >Active</option>
        <option value="inactive">Inactive</option>
        <option value="any">Any</option>
      </select>
    </div>
    <div className="search-filter">
    <div className="row-40"><SearchProject/></div>
    </div>
   </div>
   
  )
};
export default projectTitle;