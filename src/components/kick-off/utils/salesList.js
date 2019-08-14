import React from 'react';
import { isAbsolute } from 'path';
// import './component/Header/Header.css';



var style1={
  position :'absolute',
  top: '42%',
  left: '3%',
  width:'94%',
  margin: 'auto'
}


const tab=(props)=>(
  

<div>
<div>
      <span className="glyphicon glyphicon-plus"></span>
      </div>
      <table className="table  table-hover" style={style1}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">{props.table_header[0]}</th>
      <th scope="col">{props.table_header[1]}</th>
      <th scope="col">{props.table_header[2]}</th>
      <th scope="col"></th>
      
    </tr>
  </thead>
  <tbody>

  {
    props.data1.map((contact,index)=>{

   return <tr key={contact.id}>

    <td>{contact.id}</td>
    <td>{contact.name}</td>
    <td>{contact.location}</td>
    <td>{contact.phoneNumber}</td>
    <td>
        <i onClick={props.click.bind(this,contact.id,index)} className="material-icons" id="del">delete</i>
        {/* <i className="material-icons" id="del">mode_edit</i> */}
    
    </td>
 

    </tr>
    
}

)
}

  </tbody>
</table>

</div>

)

export default tab;