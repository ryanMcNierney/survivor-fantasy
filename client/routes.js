import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {Castaways, Seasons} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/seasons" component={Seasons} />
        <Route path="/castaways" component={Castaways} />
        <Route component={Seasons} />
      </Switch>
    )
  }
}

export default Routes
