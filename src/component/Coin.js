import React from 'react'
import cioncss from "./cion.css"


function Coin({name,icon,price,symbol}) {
  return (
    <div className='coin'>

      <h1>  name: {name}  </h1>
       <img src={icon} />
      <h3> price: {price}  </h3>
      <h3> symbol: {symbol}  </h3>

    </div>
  )
}

export default Coin
