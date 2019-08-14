import React, { Component } from 'react';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import './App.css';
import project from './components/kick-off/projectComponent/projects';
import customer from './components/kick-off/customerComponent/customers';
import salesContact from './components/kick-off/salesContactComponent/salesContact';
import deliveryContact from './components/kick-off/deliveryContactComponent/deliveryContact';
import addProject from './components/kick-off/projectComponent/addProject/addProject';
import addSow from './components/kick-off/addSowComponent/addSow';
import {CSSTransition, TransitionGroup} from 'react-transition-group';






class App extends Component {
  render() {
        return (
            <div>
                <BrowserRouter>

    <Route render={({location})=>(
         <TransitionGroup>
         <CSSTransition key={location.key} timeout={300} classNames='fade'>
            
            <Switch location={location}>
            <Route path='/frontend/project'  component={project}/>
            <Route path='/frontend/customer' exact component = {customer}/>
            <Route path='/frontend/salescontact' exact component={salesContact}/>
            <Route path='/frontend/deliverycontact' exact component={deliveryContact} />
            <Route path='/frontend/addsow' component={addSow} />
            <Route path='/frontend/addproject' component={addProject} />
            </Switch>
  
                </CSSTransition>

             </TransitionGroup>
        )} />




               
      

               </BrowserRouter>
            </div>   
        );
    }
}
export default App;
