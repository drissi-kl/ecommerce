import React from 'react'
import "../../../style/home/slideProduct.css";

export default function Product({image}) {
  return <main className='slideProduct'>
    <div className='slideProductImage'>
        <img src={image} alt={image} />
    </div>

    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, molestiae.</p>
    <p>200.99$</p>
    <button>buy</button>
    
  </main>
}
