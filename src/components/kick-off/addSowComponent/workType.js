import React from 'react';
import addicon from "../../../assets/images/add.svg";
import './workType.css';

function hide_show(id){
let x

    x=document.getElementById('type').value;
    console.log(x);
    if(x==='fixedcost')
    {
    document.getElementById('fixedcost').style.display='-webkit-inline-box';
    document.getElementById('timeandmaterial').style.display='none';
    }
    else if(x==='timeandmaterial')
    {
        document.getElementById('fixedcost').style.display='none';
        document.getElementById('timeandmaterial').style.display='block';
    }
    
}


const worktype=(props)=>{

return(<React.Fragment>
<div className="form-row" >
     <div className="form-group col-md-4">
     <label class="label">WorkType</label>
         <input type="text" id='worktypename'  className='form-control'  placeholder="WorkType"/>
     </div>
     <div className="form-group col-md-4">
                   <label class="label">Type</label>
        <select  id='type' className="form-control"  onChange={hide_show.bind(this,props.index)} placeholder='Type'>
            <option value='fixedcost' selected>Fixed Cost</option>
            <option value='timeandmaterial'>Time and Material</option>
        </select>
     </div>

     </div>

<div className="form-row" id='fixedcost'>
<div className="form-group col-md-4">
    
    <input type="text" id='fixedcostname'  className='form-control' placeholder="Fixed Cost"/>
    
</div>
<div className="form-group col-md-4">
  
        <select id="currency" className="form-control" placeholder='currency'>
            <option selected>Dollar</option>
            <option>Rupees</option>
        </select>
     </div>
<div className="form-group col-md-4">
   
    <input type="text" className="form-control" id='plannedhours' placeholder="Planned Hours" />
</div>
</div>


<div className="form-row" id='timeandmaterial'>

{
      props.data.map((index)=>{


 return ( <div className='form-row'>
<div className="form-group col-md-2">
<h5>Resource</h5>
    <input type="text" name='resourceName' className='form-control' />
    
</div>
<div className="form-group col-md-2">
        <label for="inputEmail">currency</label>
        <select  name='resourcecurrency' className="form-control">
            <option selected>Dollar</option>
            <option>Rupees</option>
        </select>
     </div>
<div className="form-group col-md-2">
    <label for="inputPhoneNo">Location</label>
    <input type="text" className="form-control" name="location" />
</div>

<div className="form-group col-md-2" id ='rate'>
    <label for="inputPhoneNo" id="ratelabel">Rate</label>
    <input type="text" className="form-control" name="rate" />
</div>

<div className="form-group col-md-2">
   
    <img  id='addicon' src={addicon} onClick={props.addMilestoneField.bind(this,'worktype')} ></img></div>

</div>
 )
}
)
}
</div>

</React.Fragment>
)
}


export default worktype;