import  React,{Component} from 'react';
import {getData, getJoke} from './components/apicall';
import BottomComponent from './components/BottomComponent'
import './App.css';


class App extends Component{
  state = {
    data:null,
    category:"",
    jokes:null
  };

    componentDidMount(){
      getData()
        .then((data)=>this.setState({data:data}))
    }

    handleCategoryChange=(index)=>{  
      let d2=this.state.data[index]         
      this.setState({category:d2})
      getJoke(this.state.category).then((d1)=>this.setState({jokes:d1.value}))
    }

    handleClick=()=>{
      getJoke(this.state.category).then((d1)=>this.setState({jokes:d1.value}))
    }

  render(){
    return (
    <div>
    <div className="container">
      <div className="categories">
            {this.state.data?.map((item ,index) => 
        <button key={index} onClick={()=>this.handleCategoryChange(index)} >{item}</button>
            )} 
        </div>        
    </div>
    {this.state.category!==null && <BottomComponent data={this.state.jokes}/>}
    <button onClick={()=>this.handleClick()}></button>
    </div>

  );
  }
}

export default App;
