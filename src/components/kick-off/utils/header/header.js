import React from 'react';
import './header.css';
import logout from '../../../../assets/images/logout.png';
const header= () => {
 return(
       <div className="header-style">
               <a href="https://www.optimusinfo.com/"><h6>Optimus Information</h6></a>
               <p>Kick-Off Portal</p>
               <img src={logout}/>
       </div>
)
};
export default header;