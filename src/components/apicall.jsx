const fectchJoke="https://api.chucknorris.io/jokes/random?category="
const fetchURL = "https://api.chucknorris.io/jokes/categories"


export const getJoke = (category) =>{
    
    const newfetch=fectchJoke+category
    return fetch(newfetch)
      .then((res) => res.json())
  }


export const getData=()=>
    fetch(`${fetchURL}`)
    .then((res)=>res.json())
    
