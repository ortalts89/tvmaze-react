import '../dist/App.css'
import Show from './pages/Show'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/show/">
            <Show />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
