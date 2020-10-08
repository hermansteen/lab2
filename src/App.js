import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { CountryList } from './CountryList.js'
import CountryDetails from './CountryDetails.js'

function App (props) {
  return (
    <Router>
      <div>
        <nav>
          <Link to='/country'>Country</Link>
          <Link to='/'>Home</Link>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/country/:cca3' children={<CountryDetails />} />
          <Route path='/'>
            <CountryList />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
