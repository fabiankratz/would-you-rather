import React from 'react'
import { connect } from 'react-redux'
import {Redirect, Route} from 'react-router-dom'
import UserSelect from './UserSelect'

export function Login (props) {
  const {users, authedUser} = props
  if (authedUser) {
    return (
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
      />)
  } else {
    return (
      <div style={{
        display: "grid",
        justifyContent: "center",
        margin: "2em",
        }}>
        <h1>Would you rather log in as ...?</h1>
        <ul className="userList">
          {Object.keys(users).map((id, index, arr) => {
            return (
              <li key={id} style={{position: "relative"}}>
                <UserSelect id={id} lastListItem={!(index < arr.length-1)}/>
              </li>
            )
          })}
        </ul>
      </div>)
  }
}

const mapStateToProps = ({users, authedUser}, props) => ({
  users,
  authedUser,
  ...props
})

export default connect(mapStateToProps)(Login)
