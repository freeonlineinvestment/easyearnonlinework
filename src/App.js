import React,{Component} from 'react';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Client from './components/Client/Client';
import Beginers from './components/Beginers/Beginers';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import './App.css';
import 'tachyons';
class App extends Component {
constructor() {
    super();
    this.state = {
      YPosition : 0,
      ScreenWidth: true
    }
  }

  componentDidMount(){
    this.setState( { YPosition: window.visualViewport.width } )
    
  }
  render()
  {
    return(
      <div>
        <Navigation />
        <Home />
        <Beginers />
        <Client />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}
export default App;
