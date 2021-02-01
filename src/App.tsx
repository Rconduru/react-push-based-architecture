import React from 'react'
import './App.css'
import Card from './components/Card'
import Tags from './components/Tags'
import GlobalStyle from './styles/global'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Cartão</Link>
              </li>
              <li>
                <Link to="/tags">TagsExample</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/tags">
              <Card />
            </Route>
            <Route path="/">
              <Tags />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
