import React, {useState } from 'react'
import { connect } from 'react-redux'
import {handleAddQuestion} from '../actions/questions'
import { Redirect} from 'react-router-dom'

export const AddQuestion = (props) => {
  const {addQuestion} = props
  const [optionOneText, setOptionOneText] = useState("")
  const [optionTwoText, setOptionTwoText] = useState("")
  const [redirect, setRedirect] = useState(false)
  const handleAddQuestion = (e) => {
    e.preventDefault()
    addQuestion({optionOneText, optionTwoText})
    setRedirect(true)
  }
  return (
    <div>
      {redirect && <Redirect to="/" /> }
      <form onSubmit={(e) => handleAddQuestion(e)}>
        <label htmlFor="optionOneTextInput">Option One: </label>
        <input type="text" id="optionOneTextInput" onChange={(e) => setOptionOneText(e.target.value)} />
        <label htmlFor="optionTwoTextInput">Option Two: </label>
        <input type="text" id="optionTwoTextInput" onChange={(e) => setOptionTwoText(e.target.value)} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  addQuestion: (q) => dispatch(handleAddQuestion(q))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion)
