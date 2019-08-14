import React, { Component, PureComponent } from 'react';
import '../../../App.css';
import Header from '../utils/header/header';
import Nav from '../utils/navBar/nav';
import SalesList from '../utils/salesList';
import axios from 'axios';
import AddContact from '../utils/addContact/AddContact';
import { saleslist } from '../../../services/dataservice';
import { loadOptions } from '@babel/core';
class salescontact extends Component {

  state = {
    data: [
    ]

  }


  table_header = ['Contact Name', 'Location', 'PhoneNo']

  componentDidMount() {

    console.log('component')  
    console.log(this.state.data)
    
    saleslist()
      .then(response => {


        setTimeout(() => {
          // this.load()

          this.setState({ data: response.data });
          // this.loadoff()
        }, 1300)


        console.log(response);

      })
      .catch(error => {
   
        console.log(error);
        // this.loadoff()
      });

  }

  submitform = () => {
     
    const data1 = {
      name: document.getElementById('name').value,
      emailId: document.getElementById('email').value,
      location: 'delhi',
      phoneNumber: document.getElementById('phone_no').value,
      typeId: 1
    };

    console.log(data1)
    axios.post('http://172.16.1.2:85/api/optimuscontact/1', data1)
      .then(response => {
        const new1 = this.state.data.slice()
        new1.push(response.data)
        this.setState({ data: new1 });
      
        console.log(response);
      })
      .catch(error => {
     
        console.log(error);
        
      });
  }



  load = () => {
    document.getElementById('load').style.display = 'block';
  }

  loadoff = () => {
    document.getElementById('load').style.display = 'none';
  }

  deleteContact = (contactIndex,index) => {
    
    axios.delete('http://172.16.1.2:85/api/optimuscontact/'+contactIndex)
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
    console.log('render')
    console.log(this.state.data)

    return (
      <div>
        <div>

          <div className="loader" id='load'></div>



          <Header></Header>

          <Nav ></Nav>


        </div>
        <div >
          <AddContact
            header={'Add Sales Contact'}
            modal_name={'Sales Contact Name'}
            click={this.submitform} />

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
//ToDo
// const mapStateToprops=state=>{
//           return {
//             ctr:state.c
//           };
// };

// const mapDispathToprops=state=>{
//   return
//   {
//     onincrement: ()=> dispatch()
//   };
// };

export default salescontact;
