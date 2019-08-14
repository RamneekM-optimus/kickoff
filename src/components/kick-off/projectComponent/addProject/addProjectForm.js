import React, {Component} from 'react';
import './addProjectForm.css';
import CustomerSideContacts from './customerSideContacts';
import axios from 'axios';
import add from '../../../../assets/images/add.svg';
import {NavLink, Link} from 'react-router-dom';
import ls from 'local-storage'
import AddSow from '../../addSowComponent/addSow';

var c=0;
class addProjectForm extends Component{
    constructor(props){
       super(props)
        this.state ={
            id: '',
            name: '',
            CustomerId: '',
            CustomerName: '',
            SalesContactName: '',
            DeliveryContactName:'',
            ProjectSummary: '',
            ProjectRisks:'',
            CheckBox:'',
            stackP:[c]

        }
    }


    submitHandler = (event) =>{
        event.preventDefault()
        console.log(this.state)
        axios.post('http://172.16.2.14:89/api/projects',this.state)
        .then(response=>{
            console.log(response);
        })
        // .catch(error =>{
        //     console.log(errror)
        // })
        
    }
changeHandler=(event) =>{
    this.setState({[event.target.name]:event.target.value})
}

addProjectRisk=()=>{
    const s= this.state.stackP.slice();
    s.push(c);
   this.setState({stackP:s})
   console.log(this.state.stackP);
}


 render(props) {
        const {id,
        name,
        CustomerId,
        CustomerName,
        SalesContactName,
        DeliveryContactName,
        ProjectSummary,
        ProjectRisks,CheckBox}= this.state

        return(
        <form className="form-style" onSubmit={this.submitHandler}>
        <div className="form-row">
            <div className="form-group col-md-6">
            <input type="text" className="form-control" name="id" value={id} placeholder="Project Id" onChange={this.changeHandler}/>
            </div>
            <div className="form-group col-md-6">
            <input type="text" className="form-control" name="name" value={name} placeholder="Project Name" onChange={this.changeHandler}/>
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-6">
                <input type="text" className="form-control" name="CustomerId" value={CustomerId} placeholder="Customer Id" onChange={this.changeHandler}/>
            </div>
            <div className="form-group col-md-6">
                <select name="CustomerName" value={CustomerName} className="form-control" onChange={this.changeHandler}>
                    <option selected>Rohan</option>
                    <option>Ramneek</option>
                    <option>Bharat</option>
                    <option>Bharat</option>
                </select>
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-6">
                <select name="SalesContactName" value={SalesContactName} className="form-control" onChange={this.changeHandler}>
                    <option selected>Rohan</option>
                    <option>Ramneek</option>
                    <option>Bharat</option>
                    <option>Bharat</option>
                </select>
            </div>
            <div className="form-group col-md-6">
                <select name="DeliveryContactName" value={DeliveryContactName}  className="form-control" onChange={this.changeHandler}>
                    <option selected>Rohan</option>
                    <option>Ramneek</option>
                    <option>Bharat</option>
                    <option>Bharat</option>
                </select>
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-6">
            <input 
            type="text" className="form-control" 
            name="ProjectSummary" 
            value={ProjectSummary} 
            placeholder="Project Summary"
            onChange={this.changeHandler}/>
            </div>
            
            <div className="form-group col-md-6">
                
            <img src={add} alt="Add" onClick={this.addProjectRisk}></img>
            {
                this.state.stackP.map(prisk=>{
                    return(
            <input type="text" className="form-control" name="ProjectRisks" value={ProjectRisks} placeholder="Project Risks"  onChange={this.changeHandler}/>
          
            )}
               
                )
            }
            </div>
        </div>
        <div class="checkbox col-md-2">
          <label><input type="checkbox" name="cheeckBox" value={CheckBox} onChange={this.changeHandler}/> Verified</label>
        </div>
         <CustomerSideContacts name="Project Delivery Contact Details"/>
         <CustomerSideContacts name="Project Invoice Contact Details"/>
         <CustomerSideContacts name="Project Commercial Contact Details"/>
         <CustomerSideContacts name="Project Escalation Contact Details"/>
        <table className="table table-borderless table-striped">
            <thead className="thead">
                <tr>
                <th scope="col">SOW Number</th>
                <th scope="col">SOW Date</th>
                <th scope="col">SOW End Date</th>
                <th scope="col"></th>
                <th scope="col">
                    <img src={add}  id="icon" data-toggle="modal" data-target="#myModal1"/>
                    <AddSow />
                   </th>

                </tr>
            </thead>
        <tbody>
        <tr>
                <td >12014</td>
                <td>21/02/2019</td>
                <td>03/02/2019</td>
                <td><i className='fas fa-pen '></i></td>
                <td><i className="material-icons">delete</i></td>
            </tr> 
            <tr>
                <td >167453</td>
                <td>21/02/2019</td>
                <td>03/02/2019</td>
                <td><i className='fas fa-pen '></i></td>
                <td><i className="material-icons">delete</i></td>
            </tr> 
            <tr>
                <td >183635</td>
                <td>21/02/2019</td>
                <td>03/02/2019</td>
                <td><i className='fas fa-pen '></i></td>
                <td><i className="material-icons">delete</i></td>
            </tr> 
        </tbody>
        </table>
        <div className="form-row">
            <div className="form-group col-md-2">
            <button type="submit" className="btn btn-success">Submit</button>
            </div>
            <div className="form-group col-md-2">
            <button type="reset" className="btn btn-primary">Reset</button>
            </div>
            <div className="form-group col-md-2">
            <button type="cancel" className="btn btn-danger">Cancel</button>
            </div>
        </div>
       
       
    </form> 
    
        );
    }
};
export default addProjectForm;