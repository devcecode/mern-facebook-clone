import React from 'react'
import Header from './Header'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Main from './Main'
import Friends from './Friends'
import Watch from './Watch'
import Marketplace from './Marketplace'

const App = () => {

  const initialState = {
    posts: [],
    active: ''
  }

  const reducer = (state, action) => {
    if(action.type === 'SET_POSTS') {
      return {...state, posts: action.data}
    }

    if(action.type === 'SET_ACTIVE') {
      return {...state, active: action.current}
    }
    
    return state
  }
  const store = createStore(reducer, initialState)
  return (
    <Provider store={store}>
      <div className="app">
        {/* Header */}

        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/friends">
              <Friends />
            </Route>
            <Route exact path="/watch">
              <Watch />
            </Route>
            <Route exact path="/marketplace">
              <Marketplace />
            </Route>
          </Switch>
        </Router>

        
      </div>
    </Provider>
  );
}

export default App