import  React,{ useEffect,useState} from 'react';
import {getData} from './components/apicall';
import BottomComponent from './components/BottomComponent'
import './App.css';


const App=()=>{

  const [data, setData] = useState(null)
  const [selectedCategory,setCategory] = useState(null)
  

  useEffect(() => {
    getData()
    .then((data) => setData(data))
   
  }, [])





  return (
    <div className="container">
      <div className="categories">
            {data?.map((item ,index) => 
        <button key={index} onClick={()=>setCategory(data[index])} >{item}</button>
            )}
            
        </div> 
              {(selectedCategory!==null) && <BottomComponent category={selectedCategory} />}

    </div>
  );
}

export default App;
