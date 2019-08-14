import React from 'react';
import addicon from "../../../assets/images/add.svg";
import {Component} from 'react';
import './addSow.css'
import MileStone from './milestone';
import WorkType from './workType';
import './form.css';



var c=0;

class  addForm extends Component {
    
    

    constructor(props){
        super(props)

      
   

    }

    state={
        stackM: [1],
        stackW:[1]
    }

    addMilestoneField=(type)=>{
   
        if(type==='Milestone')
        { 
      const s=this.state.stackM.slice()
        s.push(++c)
        console.log(s)
        this.setState({stackM: s});
        }

        else if(type==='worktype')
        {
            const s1=this.state.stackW.slice()
            s1.push(1)
            console.log(s1)
            this.setState({stackW: s1});
        }
       
    }

    popelement=(contactIndex)=>{
        const data = this.state.stackM.slice();
        data.splice(contactIndex, 1);
        this.setState({ stackM: data });

    }


    

    render(){
             
return (


    <form className="form-style" id='form'>
        
        <div className="form-row">
            <div className="form-group col-md-6">
            <label class="label">Sow number</label>
<input type="text" className="form-control" id="sowNumber" placeholder="SOW NUMBER" />
            </div>
            
            <div className="form-group col-md-6" id='datetimepicker1'>
            <label class="label">Sow date</label>
<input type='date' className="form-control" id="sowDate" placeholder="sow date" />
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-6">
            <label class="label">Sow Start date</label>
<input type="date" className="form-control" id="sowsdate" placeholder=" SOW Start Date" />
            </div>
            <div className="form-group col-md-6">
            <label class="label">Sow End date</label>
<input type="date" className="form-control" id="sowedate" placeholder="SOW End Date" />
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-6">
                <label class="label">Next T&C Revision Date</label>
            <input type="date" className="form-control" id="revisionDate"  placeholder="Next T&C Revision Date" />
            
             
            </div>
            <div className="form-group">
            <label class="label">Next T&C Revision Date</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Invoice Work Description"></textarea>
  </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-6">
                <h5>Milestone</h5> 
                <img src={addicon} id="img-milestone" onClick={this.addMilestoneField.bind(this,'Milestone')}></img>

{  
        
        this.state.stackM.map((index)=>{
      
     return(<MileStone  key={index} popelement={this.popelement} />
          )
    })
}

            </div>
        </div>

        <div className="form-row col-md-6">
            <h5>Work Type</h5>
            
        </div>

             
   <WorkType key='index' addMilestoneField={this.addMilestoneField} 
               data={this.state.stackW}/>


    
    <div className="form-row" id='form_id'>
    <div className="form-group col-md-2">
    <a class="btn btn-success" onClick={this.props.submitAddSow}>Submit</a>
    </div>

    <div className="form-group col-md-2">
    <a  class="btn btn-danger">Cancel</a>
    </div>
    </div>


    </form>

)
}

}

export default addForm;







