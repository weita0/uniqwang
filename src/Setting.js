import React from 'react'
import Dialog from 'react-toolbox/lib/dialog/Dialog'

export class Setting extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: props.active
    }
  }
  handleToggle () {
    this.setState({
      active: !this.state.active
    })
  }
  render () {
    const { handleDateChange } = this.props
    return (
      <div style={{display: this.state.active ? 'block' : 'none'}}>
        <Dialog
          actions={[{
            label: 'Save', onClick: handleDateChange
          }, {
            label: 'Cancel', onClick: this.handleToggle
          }]}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title='设置出生日'
        >
          
        </Dialog>
      </div>
    )
  }
}



