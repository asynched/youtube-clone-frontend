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
        <Route path="/videos/:videoId" component={VideoPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
