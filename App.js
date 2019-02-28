import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/home.component';
import Aboutus from './components/register.component';
import Contactus from './components/contactus.component';
import Students from './components/students.component';
import ChartComp from './components/charts.component';

class App extends React.Component {
   render() {
      return (
         <div >
            <nav className="navbar navbar-dark bg-warning">
               <ul className="nav navbar-nav">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/aboutus">Register</Link></li>
                  <li><Link to="/contactus">Contact Us</Link></li>
                  <li><Link to="/students">Students</Link></li>
                  <li><Link to="/charts">Charts</Link></li>
               </ul>
            </nav>

            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/aboutus" component={Aboutus} />
               <Route exact path="/contactus" component={Contactus} />
               <Route exact path="/students" component={Students} />
               <Route exact path="/charts" component={ChartComp} />
            </Switch>

         </div>
      );
   }
}


export default App;