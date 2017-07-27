import React from 'react'
import DatePicker from 'material-ui/DatePicker'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

export class Setting extends React.Component {
  // constructor (props) {
  //   super(props)    
  // }
  
  render () {
    const { active, toggleActive, handleDateChange, currentDate } = this.props   
    const actions = [
      <FlatButton 
        label='Close'
        primary
        onClick={toggleActive}
      />      
    ]
    return (      
      <Dialog
        actions={actions}
        open={active}
        modal={true} 
        title='设置你的出生日'
      >
        <DatePicker 
          defaultDate={new Date(currentDate)} 
          onChange={handleDateChange}
          autoOk={true}
        />
      </Dialog>      
    )
  }
}



