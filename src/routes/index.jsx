import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Pages
import IndexPage from '@pages/IndexPage'
import VideoPage from '@pages/VideoPage'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/video/:videoId" component={VideoPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
