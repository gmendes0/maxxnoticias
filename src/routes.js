import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Home from './Pages/Home'
import PaginaNoticia from './Pages/PaginaNoticia'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/noticia' component={PaginaNoticia}/>
      </Switch>
    </BrowserRouter>
  )
}