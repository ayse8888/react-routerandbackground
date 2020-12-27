import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Card from './components/Card'
import {lightTheme, darkTheme} from './theme/cardTheme'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import About from './components/About'



function App(){
   const [background, setBackground] = React.useState(lightTheme);
  function themeHandler(){
    setBackground(background.theme === "light" ? darkTheme : lightTheme);

  }
  const colSize = 6
    return (
    <Router>
      <div>
    <Navbar />
    <Switch>
       <Route path="/contact">
         <Contact></Contact>
       </Route>
       <Route path="/about">
         <About></About>
       </Route>
     </Switch>
    <div className="container">
      <div clasName="row">
        <div className={`col-md-${colSize}`}>
        <Card background={background} themeHandler={themeHandler}/>
        </div>
      </div>
    </div>
    <Footer />
    </div>
    </Router>
    )
}

export default App;