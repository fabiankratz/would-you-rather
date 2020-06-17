import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleSaveAuthedUser} from '../actions/authedUser'
import {Redirect, Route} from 'react-router-dom'

export class Login extends Component {
  handleSaveAuthedUser (e, id) {
    e.preventDefault()
    this.props.handleSaveAuthedUser(id)

  }
  render() {
    const {users, authedUser} = this.props
    return (
      <div>
        { authedUser && (
          <Route 
            path="/login" 
            render={({location}) => {
                return (
                  <Redirect 
                    to={{
                      pathname: location.state.from.pathname,
                      state: { from: location }
                    }} />
                )
              }}
          />
        )}
        <ul>
          {Object.keys(users).map(id => {
            return (
              <li key={id}>
                <button onClick={(e) => this.handleSaveAuthedUser(e, id)}>{users[id].name}</button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({users, authedUser}, props) => ({
  users,
  authedUser,
  ...props
})

const mapDispatchToProps = (dispatch) => ({
  handleSaveAuthedUser: (id) => dispatch(handleSaveAuthedUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
