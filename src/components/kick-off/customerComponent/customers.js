import React, { Component } from 'react';
import { BrowserRouter , Switch, Route, Link } from 'react-router-dom';

// import '../';
import HeaderBar from '../utils/header/header';
import NavBar from '../utils/navBar/nav';
import Title from '../customerComponent/customerTitle/customerTitle';
import ProjectTable from './customerList/customerList';
import { getCustomers } from '../../../services/dataservice';
import axios from 'axios';

class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers:  [],
            customerList: [],
            value:'',
            name:'lakshya',
            phone_no:'1234',
            category:1,
            status:true
        };
    }
    delete = () => {
        alert('delete');
        axios.delete('https://jsonplaceholder.typicode.com/posts/')
        .then(response=>(console.log(response)));
    }
    postdata = () => {
        alert("working");
       const data={
           //id:document.getElementById('custid').value,
           customerName: 'ashiah' ,
           phoneNumber: '36363',
           categoryId:1
       }
       axios.post('http://172.16.2.34:99/api/customers',data)
            .then(response=>(console.log(response)));
    }
    componentDidMount(){
       getCustomers()
        .then(customers =>{
            
            this.setState({customerList: customers.data});
            this.setState({customers:this.state.customerList.filter(customer=>{
                return customer.status==='true'
                })})
            console.log(customers);
            return customers;
        });
    }
    searchitem=(event)=>{
       
        let newList = [];
       // this.state.customerList.map(t=>(this.setState({newList:this.state.customerList.customerName})))
        if (event.target.value !== "") {
           // this.setState({customers:null});
            // Assign the original list to currentList
      

            // Use .filter() to determine which items should be displayed
            // based on the search terms
      this.setState({customers:this.state.customerList.filter(item => {
                // change current item to lowercase
        const lc = item.customerName.toString().toLowerCase();
        console.log(lc);
                // change search term to lowercase
        const filter = event.target.value.toString().toLowerCase();
                // check to see if the current list item includes the search term
                // If it does, it will be added to newList. Using lowercase eliminates
                // issues with capitalization in search terms and search content
        return lc.includes(filter);
      })});
    } else {
        // If the search bar is empty, set newList to original task list
        this.setState({customers:this.state.customerList.filter(customer=>{
            return customer.status==='Active'
            })})
}
    
    }
    showCustom=()=>{
        
        console.log('function call')
        const x = document.getElementById('custom-dropdown').value;
        console.log(x);
        this.setState({customers:this.state.customerList.filter (customer=>{
          return customer.customerName==x;
          })})
      }
    active=(event)=>{
        console.log(event.target.value)
        if (event.target.value === 'Active') {
            console.log('active')
        this.setState({customers:this.state.customerList.filter (customer=>{
        return customer.status=='Active'
        })})
        }
        else if (event.target.value === 'Inactive') {
        this.setState({customers:this.state.customerList.filter (customer=>{
        return customer.status=='Inactive'
        })})
        }
        else if (event.target.value === 'Any') {
        this.setState({customers:this.state.customerList})
        }
        }
        

    render() {
        return (
            
            <div>
                < HeaderBar />
                <NavBar />

                <Title change = {this.active.bind(this)}
                        search = {this.searchitem.bind(this)}
                        showcustomer={this.showCustom}
                        addcustomer={this.postdata.bind(this)}/>
                
                <ProjectTable customers={this.state.customers}
                                edit={this.state.customers}
                                deletecustom={this.delete.bind(this)}/>
                   
            </div>   
        );
    }
}
export default Customer;