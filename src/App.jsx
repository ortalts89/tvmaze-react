import '../dist/App.css'
import Show from './pages/Show'
import Home from './pages/Home'
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [query, setQuery] = useState("")

  return (
    <Router>
    <div>
      <Header setQuery={setQuery}/>
        <Switch>
          <Route path="/show/">
            <Show />
          </Route>
          <Route exact path="/">
            <Home query={query} />
          </Route>
        </Switch>
    </div>
    </Router>

  )
}

export default App
