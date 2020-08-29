import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import HomePage from './components/home/HomePage'
import MatchResultsPage from './components/match-results/MatchResultsPage'
import HeroList from './components/heroesPage/HeroList'
import MainNavbar from './components/MainNavbar'
import RecentMatchesPage from './components/recentMatchesPage/RecentMatchesPage'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Container>
        <BrowserRouter>
        {/* <MainNavbar /> */}
          <Switch>
            <Route path="/match/:id" component={MatchResultsPage} />
            <Route exact path="/heroes" component={HeroList} />
            <Route path="/recentMatches/:heroName" component={RecentMatchesPage} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </Container>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
