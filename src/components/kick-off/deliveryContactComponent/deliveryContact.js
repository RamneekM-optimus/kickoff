import React, { Component, PureComponent } from 'react';
import '../../../App.css';
import Header from '../utils/header/header';
import Nav from '../utils/navBar/nav';
import axios from 'axios';
import { loadOptions } from '@babel/core';
import SalesList from '../utils/salesList';
import AddContact from '../utils/addContact/AddContact';

class deliverycontact extends Component {

  state = {
    data: [{ id: 1, customerName: 'ramneek', phoneNo: 454646, location: 'old delhi' },
    { id: 2, customerName: 'ram', phoneNo: 454646, location: 'new delhi' },
    { id: 3, customerName: 'lakshay', phoneNo: 454646, location: 'del' },
    { id: 4, customerName: 'paras', phoneNo: 454646, location: 'delh' }
    ]
  }
  table_header= ['Contact Name','Location','PhoneNo'];
  

  deleteContact = (ContactIndex) => {

    const data = this.state.data.slice();
    data.splice(ContactIndex, 1);
    this.setState({ data: data });
  }
  submitform=()=> {

    const data1={
            name: document.getElementById('name').value,
            emailId: document.getElementById('email').value,
            location:'mumbai',
            phoneNumber: document.getElementById('phone_no').value
     };
  
    axios.post('http://172.16.1.2:85/api/optimuscontact/2',data1)
            .then(response=>{
              const new1=this.state.data.slice()
              new1.push(response.data)
              this.setState({data:new1});  
              console.log(response);
            });
    }



    deleteContact = (contactIndex,index) => {

      axios.delete('http://172.16.1.2:85/api/optimuscontact'+contactIndex)
      .then(response => {
        const data = this.state.data.slice();
        data.splice(index, 1);
        this.setState({ data: data });
      })
      .catch(error => {
        
        console.log(error);
        
      });
  
     
    }

  render() {
    
    console.log('hello');
    return (

      <div>


        <div>

          <Header ></Header>

          <Nav ></Nav>


        </div>
        <div >

          <AddContact 
             header={'Add Delivery Contact'}
              modal_name={'Delivery Contact Name'}
              click={this.submitform}      />
        </div>

        <div>
          <div>
            <span className="glyphicon glyphicon-plus"></span>
          </div>
          <SalesList path='/salescontact' exact
            click={this.deleteContact.bind(this)}
            data1={this.state.data}
            table_header={this.table_header}
          ></SalesList>
        </div>

      </div>


    );

  }

}

export default deliverycontact;