import React from 'react'
require('./common.scss')

export default class Popover extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      display: 'none'
    }
  }
  handleClick () {
    this.setState({
      display: this.state.display === 'block' ? 'none' : 'block'
    })
  }
  render () {
    const { content, children } = this.props
    return (
      <div className='popover'>
        <div className='content' style={{display: this.state.display}}>
          {content}
        </div>
        <div className='children' onClick={this.handleClick.bind(this)}>
          {children}
        </div>
      </div>
    )
  }
}