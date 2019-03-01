import React, { useEffect } from 'react';
import './App.css';
import Listing from './Listing.js';

const func = () => fetch('https://jsonplaceholder.typicode.com/todos')
      .then(results => results.json())
      .then(data => console.log(data))

const App = () => {
  useEffect(() => {
    func()
  },[])
  const arrObj = [
      {
        title: 'Modern Loft',
        type: 'Studio',
        location: {
          city: 'San Francisco',
          state: 'CA',
          country: 'USA'
        }
      },
      {
        title: 'Spacious 2 Bedroom',
        type: 'Condo',
        location: {
          city: 'Los Angeles',
          state: 'CA',
          country: 'USA'
        }
      },
    ];  

    console.log(arrObj)
    return (
      <div>
				<Listing arrObj = {arrObj} />
      </div>
    );
  }

export default App;
