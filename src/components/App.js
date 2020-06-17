import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleLoadInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading-bar'
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import Login from './Login'
import Leaderboard from './Leaderboard'

export class App extends Component {
  componentDidMount () {
    this.props.handleLoadInitialData()
  }
  render() {
    const {authedUser, loading } = this.props
    return (
      <React.Fragment>
        <LoadingBar />
        { !loading &&
          <Router>
              <Route 
                path="*" 
                render={({location}) => {
                  if (!(authedUser || location.pathname === "/login")) {
                    return (
                      <Redirect 
                        to={{
                          pathname: "/login",
                          state: { from: location }
                        }} />
                    )
                  }
                }}/>
              <Switch>
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
                <Route path="/">
                  <h1>Home</h1>
                </Route>
              </Switch>
          </Router>
        }
      </React.Fragment>
    )
  }
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
