import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { handleLoadInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading-bar'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import Login from './Login'
import Leaderboard from './Leaderboard'
import Dashboard from './Dashboard'
import Question from './Question'
import Navbar from './Navbar'
import AddQuestion from './AddQuestion'

export function App (props) {
  const {authedUser, loading, handleLoadInitialData} = props
  useEffect(() => {handleLoadInitialData()}, [handleLoadInitialData])
  const location = useLocation()
  const doRedirect = !(authedUser || location.pathname === "/login")
  return (
    <React.Fragment>
      <LoadingBar />
      <Navbar />
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
              <Route path="/question/:qid">
                <Question />
              </Route>
              <Route path="/add">
                <AddQuestion />
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
