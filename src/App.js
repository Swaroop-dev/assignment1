import  React,{ useEffect,useState} from 'react';
import './App.css';


const App=()=>{


  const [data, setData] = useState(null)
  const fectchJoke="https://api.chucknorris.io/jokes/random?category=dev"
  const fetchURL = "https://api.chucknorris.io/jokes/random?category=dev"


const dev="dev"

  const getData = () =>
    fetch(`${fetchURL}`)
      .then((res) => res.json())


  useEffect(() => {
    getData().then((data) => setData(data))
    console.log(data)
    
  }, [])

  

  return (
    <div className="App">
      {data.value}
      
      {/* <div>
      {data?.map((item) => 
        
          <h6>{item.value}</h6>
        
      )}
    </div> */}
    </div>
  );
}

export default App;
