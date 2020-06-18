import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { handleLoadInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading-bar'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import Login from './Login'
import Leaderboard from './Leaderboard'
import Dashboard from './Dashboard'

export function App (props) {
  useEffect(() => {props.handleLoadInitialData()}, [])
  const location = useLocation()
  const {authedUser, loading } = props
  const doRedirect = !(authedUser || location.pathname === "/login")
  return (
    <React.Fragment>
      <LoadingBar />
        { !loading && (
          doRedirect
          ? <Route 
              path="*" 
              render={({location}) => (
                <Redirect 
                  to={{
                    pathname: "/login",
                    state: { from: location }
                  }} />
              )}
            />
          : <Switch>
              <Route path="/question/:qid" render={({match}) => (
                <h1>Question {match.params.qid}</h1>
              )}/>
              <Route path="/add">
                <h1>Add question</h1>
              </Route>
              <Route path="/leaderboard">
                <Leaderboard />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route exact path="/">
                <Dashboard />
              </Route>
            </Switch>)
      }
    </React.Fragment>
  )
}

const mapStateToProps = ({authedUser, loading}, props) => ({
  authedUser,
  loading,
  ...props
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleLoadInitialData: () => dispatch(handleLoadInitialData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
