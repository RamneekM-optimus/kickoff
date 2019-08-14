import React from 'react';
import axios from 'axios';
// import addContact from '../component/Utility/AddContact/AddContact';

const salesurl='http://172.16.1.2:85/api/optimuscontact/1';
const CUSTOMER_URL = "http://172.16.2.34:89/api/customers";

export function getCustomers(){
    return getData(CUSTOMER_URL);
}

function getData(url){
    return axios.get(url)           
}


export  function saleslist(){

return  getlist(salesurl)

}

function getlist(salesurl){

   return axios.get(salesurl);
}

