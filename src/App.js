import React, { useState } from "react";
import data from "./data";
import Tours from './components/Tours'
const App = () => {

  const[tours, setTours ] = useState(data);

  function removeTour (id) {
    const newTour = tours.filter(tour => tour.id !== id );    //function to remove tour
    setTours(newTour);
}

if(tours.length === 0 )
{
  return(
    <div className="refresh">
     
      <h4 className="no-tour">No Tours Left</h4>
      <button className="refresh-btn" onClick={() => setTours(data)}>
        Refresh</button>
    </div>
  );
}

  return (
    <div className="App">
      <Tours tours = {tours} removeTour = {removeTour}></Tours>
    </div>
  )
};

export default App;
