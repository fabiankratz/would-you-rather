import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleLoadInitialData } from '../actions/shared'
import { handleAddQuestion } from '../actions/shared'
import { setAuthedUser } from '../actions/authedUser'

export class App extends Component {
  componentDidMount () {
    this.props.handleLoadInitialData()
    this.props.setAuthedUser("sarahedo")
    this.props.handleAddQuestion({optionOneText:"Be happy", optionTwoText: "Be sad"})
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleLoadInitialData: () => dispatch(handleLoadInitialData()),
    handleAddQuestion: (question) => dispatch(handleAddQuestion(question)),
    setAuthedUser: (id) => dispatch(setAuthedUser(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
