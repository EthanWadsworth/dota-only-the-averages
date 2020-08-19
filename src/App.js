import React from 'react';
import './App.css';
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import HomePage from './components/home/HomePage'
import MatchResultsPage from './components/match-results/MatchResultsPage'
import HeroList from './components/heroesPage/HeroList'
import MainNavbar from './components/MainNavbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <MainNavbar />
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/match" component={MatchResultsPage} />
            <Route path="/heroes" component={HeroList} />
          </Switch>
        </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
