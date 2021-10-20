import '../dist/App.css'
import Show from './pages/Show'
import Home from './pages/Home'
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

function App() {

  return (
    <Router>
    <div>
      <Header />
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/show/:id">
            <Show />
          </Route>
        </Switch>
    </div>
    </Router>

  )
}

export default App
