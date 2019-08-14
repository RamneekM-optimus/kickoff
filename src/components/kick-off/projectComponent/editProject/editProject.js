import React,{Component} from 'react';
import Header from '../../utils/header/header';
import Navbar from '../../utils/navBar/nav';
import AddProjectForm from '../addProject/addProjectForm';
import axios from 'axios';


class EditProject extends Component{
    constructor(props){
      super(props);
      this.state = {value: ''};
    }
    componentDidMount(){
               axios.get('http://172.16.2.14:88/api/project')
               .then(response=>{
                   
                     this.setState({projectList:response.data,projects:response.data})
                     this.setState({projects:this.state.projectList.filter(project=>{
                       return project.status===true
                     })})
                     }
               )
     }
   
     state={
          projectList:[],
          value: '',
          projects:[]
     }
  
     render(){
        return(
            <div className="App">
              <Header/>
              <Navbar />
              <AddProjectForm />
            </div>
        );
      } 
    }
export default EditProject;
