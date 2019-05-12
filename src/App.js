import React, { Component } from 'react';
import './App.css';

//IMPORT COMPONENTS
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import Smartphone from './Components/Smartphone';
import Promotion from './Components/Promotion';

//IMPORT DATA
import SmartphoneData from './Data/SmartphoneData';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      spInfo: SmartphoneData
    }
  }

  render() {

    let elmSmartphone = this.state.spInfo.map((e, i) => {
      return <Smartphone
        id = {e.id}
        name={e.name}
        price={e.price}
        desc={e.desc}
        img={require(`${e.img}`)}
        screen={e.screen}
        backCamera={e.backCamera}
        frontCamera={e.backCamera}
      />
    })

    return (
      <div className="App">
        <Header />
        <Carousel />

        <section id="smartphone" className="container-fluid pt-5 pb-5">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <div className="row">
            {elmSmartphone}
          </div>
        </section>

        <Promotion />
      </div>
    );
  }
}

export default App;