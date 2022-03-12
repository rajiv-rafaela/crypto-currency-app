import { useState,useEffect} from 'react';
import './App.css';
import  Axios  from 'axios';
import Coin from "./component/Coin"

function App() {
  const [listOfCoins,setlistOfCoins] = useState ([]);
  const [searchwords,setSearchWord] = useState ("");
  
  useEffect (()=> {
   Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then((response) =>{
     setlistOfCoins(response.data.coins);
   }
  
   );
  },   []);
  
  const filteredcoins = listOfCoins.filter ((coin) => {   
    return coin.name.toLocaleLowerCase().includes(searchwords.toLocaleLowerCase());
  })
  
  return (
    <div className="App">
      <div className='cryptoHeader'>
       <input type="text" placeholder='search coins' onChange={(event)=> {setSearchWord(event.target.value)} }/>

      </div>
      <div className='cryptoDisplay'>{filteredcoins.map((coin)=>{return <Coin  name={coin.name}  icon ={coin.icon} price = {coin.price} symbol = {coin.symbol} />})}</div>
    
    
    </div>
  );
}

export default App;
