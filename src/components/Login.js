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
        margin: "2em",}}>
        <h1>Would you rather log in as ...?</h1>
        <ul style={{listStyle: "none", cursor:"pointer"}}>
          {Object.keys(users).map((id, index, arr) => {
            return (
              <li key={id} style={{position: "relative"}}>
                <UserSelect id={id}/>
                {index < arr.length-1 && (
                  <p 
                    style={{
                      backgroundColor: "white",
                      position: "absolute",
                      bottom: "-1.5em",
                      textAlign: "center",
                      left: "calc(50% - 20px)",
                      border: "1px solid black",
                      padding: "0 0.2em",
                      borderRadius: "50%",
                      zIndex: "100"
                    }}>or</p>
                )}
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
