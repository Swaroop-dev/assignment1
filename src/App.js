import  React,{ useEffect,useState} from 'react';
import {getJoke,getData} from './components/apicall';
// import  TopComponent from './components/TopComponent'
import './App.css';


const App=()=>{

  const [data, setData] = useState(null)
  const [joke, setJoke] = useState(null)
  const [selectedCategory,setCategory] = useState(null)
  

    useEffect(() => {
    getData().then((data) => setData(data))
   
  }, [])

  //  const handleCategory=(index)=>{
  //       setCategory(data[index])
  //       console.log(selectedCategory)
  //  }

  return (
    <div className="container">
      <div className="categories">
            {data?.map((item ,index) => 
        
        <button key={index} >{item}</button>
      
            )}
        </div> 
    </div>
  );
}

export default App;
