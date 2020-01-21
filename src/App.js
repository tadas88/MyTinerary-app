import React, { Component } from 'react';
import Landing from './components/Landing';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar2';
import Cities from './components/Cities3';
import Itenerary from './components/Itinerary';
import AccountLandingPage from './components/AccountLandingPage';
import NewAccount from './components/CreateAccount2';
import Login from './components/Login2';
import AccountCreated from './components/AccountCreated';
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="innerApp">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/cities' component={Cities} />
            <Route path='/account' component={AccountLandingPage} />
            <Route path='/newaccount' component={NewAccount} />
            <Route path='/login' component={Login} />
            <Route path='/accountcreated' component={AccountCreated} />
            <Route path="/iteneraries/:city_name" component={Itenerary} />
          </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
