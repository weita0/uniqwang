import React from 'react'
import DatePicker from 'material-ui/DatePicker'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

export class Setting extends React.Component {  
  shouldComponentUpdate (nextProps) {
    if (this.props.active !== nextProps.active) {
      return true
    }
    if (!this.compareDates(nextProps.currentDate, this.props.currentDate)) {
      return true 
    }
    return false 
  }

  getYearMonthDate (momentObj) {
    let {years, months, date} = momentObj.toObject()
    return {
      years,
      months, 
      date
    }
  }

  compareDates (one, another) {
    let fst = this.getYearMonthDate(one)
    let snd = this.getYearMonthDate(another)
    if (fst.years === snd.years && fst.months === snd.months && fst.date === snd.date) {
      return true
    } else {
      return false
    }
  }

  render () {
    const { active, toggleActive, handleDateChange, currentDate } = this.props   
    const {years, months, date} = currentDate.toObject()
    const actions = [
      <FlatButton 
        label='Close'
        primary
        onClick={toggleActive}
      />      
    ]
    console.log('rerendering...')
    return (      
      <Dialog
        actions={actions}
        open={active}
        modal={true} 
        title='设置你的出生日'        
      >
        <DatePicker 
          defaultDate={new Date(years, months, date)} 
          onChange={handleDateChange}
          autoOk={true}          
          formatDate={(date) => Intl.DateTimeFormat('zh').format(date)}
          openToYearSelection={true}
          hideCalendarDate={true}          
          mode='portrait'
        /> 
      </Dialog>      
    )
  }
}



