import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleLoadInitialData } from '../actions/shared'

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
    handleLoadInitialData: () => dispatch(handleLoadInitialData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
