import React, {useState} from 'react';
import items from './items';
import ShoppingList from './ShoppingList';
import './App.css';

function App() {
  const [groceries, setGroceries] = useState(items)
    const newItem = (e) => {
      setGroceries(groceries.concat([{item: document.querySelector('#item').value, brand: document.querySelector('#brand').value, units: document.querySelector('#units').value, quantity: document.querySelector('#qty').value, isPurchased: false }]))

    }
  return (
    <div className="App">
      {groceries.map((item, i) => {
        return(
          <div key = {i}>
            {!item.isPurchased?
            <ShoppingList
            item= {item.item}
            brand= {item.brand}
            units= {item.units}
            quantity= {item.quantity}
            isPurchased= {item.isPurchased}
            />:null}
          </div>
        )
      })}
     
        <input id='item' type="text" defaultValue={'item'}/><br />
        <input id='brand' type="text" defaultValue={'brand'}/><br />
        <input id='units' type="text" defaultValue={'units'}/><br />
        <input id='qty' type="text" defaultValue={'quantity'}/><br />
        <button onClick={newItem}>Submit</button>
      
    </div>
  )
}

export default App;