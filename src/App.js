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

    handleCategoryChange(index){
      this.setState({category:this.state.data[index]})
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
    {this.state.jokes!==null && <BottomComponent data={this.state.jokes}/>}
    </div>
  );
  }
}

export default App;
