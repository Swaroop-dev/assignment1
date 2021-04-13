import  React,{Component} from 'react';
import {getData, getJoke} from './components/apicall';
import BottomComponent from './components/BottomComponent'
import './App.css';


class App extends Component{
  state = {
    data:null,
    category:null,
    jokes:null
  };

  componentDidMount(){
      getData()
        .then((data)=>this.setState({data:data}))
  }

  handleCategoryChange=(index)=>{  
      const d2=this.state.data[index]
      this.setState({category:d2})        
      getJoke(d2)
      .then((d1)=>this.setState({jokes:d1.value}))            
  }

  handleClick=()=>{
      getJoke(this.state.category).then((d1)=>this.setState({jokes:d1.value}))
  }

  render(){
    const {data,category,jokes}=this.state
    return (
    <div className="App">
    <div className="container">
      <div className="categories">
            {data?.map((item ,index) => 
        <button key={index} onClick={()=>this.handleCategoryChange(index)} >{item}</button>
            )} 
        </div>        
    </div>
    
    {jokes!==null && <div className="joke">
      <BottomComponent data={jokes}/>
     
      </div>
      }
     {category!==null && <button className="btn" onClick={()=>this.handleClick()}>refresh</button>}  
    </div>
   
    
  );
  }
}

export default App;
