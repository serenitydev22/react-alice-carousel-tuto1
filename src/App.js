import React from 'react';
import './App.css';
//Install and import the library
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


function App() {

  //Responsiveness 
  const responsive = {
    0: { items: 1 },
    568: { items: 4 },
    1024: { items: 6 },
  };
  

  //The carousel items 
  const items = [
    <div className="item">
      <img src="/cat1.png" alt="cute cat"/>
    </div>,
    <div className="item">
      <img src="/cat2.png" alt="cute cat"/>
    </div>,
    <div className="item">
      <img src="/cat3.png" alt="cute cat"/>
    </div>,
    <div className="item">
      <img src="/cat1.png" alt="cute cat"/>
    </div>,
    <div className="item">
      <img src="/cat2.png" alt="cute cat"/>
    </div>,
    <div className="item">
      <img src="/cat3.png" alt="cute cat"/>
    </div>,
    <div className="item">
      <img src="/cat2.png" alt="cute cat"/>
    </div>,
    <div className="item">
      <img src="/cat3.png" alt="cute cat"/>
    </div>,

  ];


  return (
    <div className="App">

      <h1>Cats list</h1>
      
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </div>
  );
}

export default App;
