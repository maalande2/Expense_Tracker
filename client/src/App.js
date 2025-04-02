import React, {useState, useEffect} from 'react'

function App() {
  const [items, setItems] = useState([{}])

  // fetch api, then store res at json, then set items
  useEffect(() => {
    fetch("/api/test")
    .then(res => res.json())
    .then(data => {
        setItems(data.items);
        console.log(data.items);
      }
    )
  }, [])

  return (
    <div>
      <h1>Transactions</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <strong>Date:</strong> {item.date} <br />
            <strong>Price:</strong> ${item.price} <br />
            <strong>Category:</strong> {item.category}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App