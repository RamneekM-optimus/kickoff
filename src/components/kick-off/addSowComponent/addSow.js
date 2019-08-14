import React,{Component,PureComponent} from 'react';
import '../../../App.css';
import Header from '../utils/header/header';
import Nav from '../utils/navBar/nav';
// import {saleslist} from '../../Services/dataservice';
import { loadOptions } from '@babel/core';
import AddForm from './sowForm';

class addSow extends Component {

  constructor(props){

    super(props)

    this.state={
      sowNo:'',
      sowDate: '',
      sowStartDate:'',
      sowEndDate:'',
      nexTAndC: '',
      invoiceworkdesc:'',
      sowNotSigned:'',
      mileStone:[],
     workType:{},
     
     fixedCost:{},

     resource:[]

             
          }
  }

  settingstate=(s3,s4,worktype,fixedcost)=>{

    if(worktype.type==='timeandmaterial')
    {
        this.setState({sowNo:document.getElementById('sowNumber').value,
          sowDate: document.getElementById('sowDate').value,
          sowStartDate:document.getElementById('sowDate').value,
          sowEndDate:document.getElementById('sowDate').value,
          nexTAndC: document.getElementById('revisionDate').value,
          invoiceworkdesc:document.getElementById('exampleFormControlTextarea1').value,
          // sowNotSigned:document.getElementById('sownotsigned').value,
          mileStone:s3,
         workType:worktype,              
         resource:s4,
         fixedCost:{}
         },() => console.log(this.state)) 
        //  console.log(s3)
        //  console.log(s4)
        //  console.log(this.state)
    }
    else if( worktype.type==='fixedcost')
    { 
      this.setState({sowNo:document.getElementById('sowNumber').value,
      sowDate: document.getElementById('sowDate').value,
      sowStartDate:document.getElementById('sowDate').value,
      sowEndDate:document.getElementById('sowDate').value,
      nexTAndC: document.getElementById('revisionDate').value,
      invoiceworkdesc:document.getElementById('exampleFormControlTextarea1').value,
      // sowNotSigned:document.getElementById('sownotsigned').value,
      mileStone:s3,
     workType:worktype,
     fixedCost:fixedcost,
     resource:[]
      },() => console.log(this.state))
  
    }

  }
                      
  submitAddSow=()=>{
    let i=0;
    let s=[];
    let s1=[];
    let s2=[];
    let s3=[];
    let s4=[];
    const x=document.getElementsByName('milestoneName');
    const y=document.getElementsByName('milestoneRemarks');
    const z=document.getElementsByName('mileStoneCompletion');
     

    for(i=0;i<x.length;i++)
      
       s.push(x[i].value)
    
    for(i=0;i<y.length;i++)
                
       s1.push(y[i].value)
       
    for(i=0;i<z.length;i++)
            
       s2.push(z[i].value)
    
    for(i=0;i<s.length;i++)
    {
      s3.push({
        milestonename : s[i],
        remarks: s1[i],
        completionDate: s2[i]
      })
    } 
      
    let worktype= {workTypeName: document.getElementById('worktypename').value,
                  type: document.getElementById('type').value
                  }

    let fixedcost= {  fixedcostName: document.getElementById('fixedcostname').value,
                     currency: document.getElementById('currency').value,
                      plannedHour: document.getElementById('plannedhours').value
                   }

        console.log(worktype)

    const resourcename=document.getElementsByName('resourceName');
    const resourcecurr=document.getElementsByName('resourcecurrency');
    const resourcelocation= document.getElementsByName('location');
    const resourcerate=document.getElementsByName('rate');
    
    for(i=0;i<resourcename.length;i++)
    {
      s4.push({resourcename:resourcename[i].value,resourcecurrency:resourcecurr[i].value,resourcelocation:resourcelocation[i].value,resourcerate:resourcerate[i].value})
    }
  
      const sow_number=document.getElementById('sowNumber').value;
      const sow_date=document.getElementById('sowDate').value; 
      const sow_s_date=document.getElementById('sowDate').value; 
      const sow_e_date=document.getElementById('sowDate').value; 
      const revisionDate=document.getElementById('revisionDate').value;
      const invoice=document.getElementById('exampleFormControlTextarea1').value;
      // const sowNotSigned=document.getElementById('sownotsigned').value;

    this.settingstate(s3,s4,worktype,fixedcost)
     
}
               
      render(){

        return (
          <React.Fragment>
                    
        
        <div className="modal fade" id="myModal1" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
            <div className="modal-header">
            <h4 className="modal-title" id="header2">AddSow</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  
            </div>
            <div className="modal-body">

            <div>
            <AddForm  submitAddSow={this.submitAddSow}>

            </AddForm>
            </div>


            </div>

 


            </div>
          </div>
        </div>



    
       </React.Fragment>
         
        );
    
      }
    
    }


export default addSow;


