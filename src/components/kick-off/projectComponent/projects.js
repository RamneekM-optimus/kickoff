import React,{Component} from 'react';
import '../../../App.css';
import Header from '../utils/header/header';
import Navbar from '../utils/navBar/nav';
import ProjectList from './projectList/projectList';
import AddProjectButton from './projectTitle/projectTitle';
import axios from 'axios';
// import SearchProject from './Components/Projects/SearchProject/SearchProject.js'
class Project extends Component{
 componentDidMount(){
            axios.get('http://172.16.2.14:89/api/projects')
            .then(response=>{
                  console.log(response.data)
                  this.setState({projectList:response.data,projects:response.data})
                  this.setState({projects:this.state.projectList.filter(project=>{
                    return project.status==="true"
                    
                  })})
                  }
            )
  }

  state={
       projectList:[],
       value: '',
       projects:[]
  }

  deletefunc=(arrindex)=>{
    const deleteProject=this.state.data.slice(arrindex);
    deleteProject.splice(arrindex,1);
    this.setState({projects:deleteProject});

  }

  active=(event)=>{
    console.log(event.target.value)
    if (event.target.value === 'active') {
         this.setState({projects:this.state.projectList.filter(project=>{
      return project.status==="true"
       })})
    }
    else if (event.target.value === 'inactive') {
         this.setState({projects:this.state.projectList.filter(project=>{
         return project.status==="false"
      })})
    }
    else if (event.target.value === 'any') {
         this.setState({projects:this.state.projectList})
    }
  }

  render(){
    return(
        <div>
          <Header/>
          <Navbar />
          <AddProjectButton 
           change={this.active.bind(this)}/>
          
          
          <ProjectList 
          projects={this.state.projects}
          click={this.deletefunc.bind(this)}/>
          
         
          
        </div>
    );
  } 
}
export default Project;
