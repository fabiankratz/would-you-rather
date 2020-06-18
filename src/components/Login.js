import React from 'react'
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
import {Redirect, Route} from 'react-router-dom'

export function Login (props) {
  const {users, authedUser, setAuthedUser} = props
  const handleSetAuthedUser = (e, id) => {
    e.preventDefault()
    setAuthedUser(id)
  }
  return (
    <div>
      { authedUser && (
        <Route 
          path="/login" 
          render={({location}) => {
              return (
                <Redirect 
                  to={{
                    pathname: location.state ? location.state.from.pathname : "/",
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
              <button onClick={(e) => handleSetAuthedUser(e, id)}>{users[id].name}</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = ({users, authedUser}, props) => ({
  users,
  authedUser,
  ...props
})

const mapDispatchToProps = (dispatch) => ({
  setAuthedUser: (id) => dispatch(setAuthedUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
