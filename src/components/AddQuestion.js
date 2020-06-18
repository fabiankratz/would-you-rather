import React, {useState } from 'react'
import { connect } from 'react-redux'
import {handleAddQuestion} from '../actions/questions'

export const AddQuestion = (props) => {
  const {addQuestion} = props
  const [optionOneText, setOptionOneText] = useState("")
  const [optionTwoText, setOptionTwoText] = useState("")
  const handleAddQuestion = (e) => {
    e.preventDefault()
    addQuestion({optionOneText, optionTwoText})
  }
  return (
    <div>
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
