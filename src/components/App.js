import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleLoadInitialData } from '../actions/shared'
import { handleAddQuestion } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { handleAnswerQuestion } from '../actions/questions'

export class App extends Component {
  componentDidMount () {
    this.props.handleLoadInitialData()
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
    setAuthedUser: (id) => dispatch(setAuthedUser(id)),
    handleAnswerQuestion: (questionAnswer) => dispatch(handleAnswerQuestion(questionAnswer))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
