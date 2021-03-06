import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Article from './Pages/Article'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/noticia' component={Article} />
      </Switch>
    </BrowserRouter>
  )
}