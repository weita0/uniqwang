import React from 'react'
import moment from 'moment'
import './Counter.css'
import { Setting } from './Setting'
import * as helper from '../helper'

export class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      birth: moment('1994-09-07'),
      settingActive: false
    }    
  }
  componentWillMount () {              
    this.setState(this.count())    
  }
  count () {
    let now = moment()
    return {
      years: now.diff(this.state.birth, 'years', true),
      days: now.diff(this.state.birth, 'days'),
      hours: now.diff(this.state.birth, 'hours'),
      minutes: now.diff(this.state.birth, 'minutes'),
      seconds: now.diff(this.state.birth, 'seconds')
    }
  }
  toggleSetting (e) {
    e.preventDefault()   
    this.setState({
      settingActive: !this.state.settingActive
    }) 
  }
  handleDateChange (event, date) {    
    this.setState({
      birth: moment(date),
      settingActive: false
    })
  }
  componentDidMount () {    
    this.id = helper.createInterval(this.refresh.bind(this), 1000)
  }  
  refresh () {
    this.setState(this.count())
  }
  componentWillUnmount () {
    helper.clearSingleLoop(this.id)
  }
  render () {
    const {...past} = this.state  
    return past.days && past.hours && past.seconds ? 
      <div className='counter'>
        <div className='birth-info'>
          {'生于'}
          <span onClick={this.toggleSetting.bind(this)}>{this.state.birth.format('YYYY年MM月DD日')}</span>
        </div>
        <div className='box'>
          {'来到世上已经:'}
          <div className='cell'><span>{`${past.years.toFixed(1)}`}</span>年</div>
          <div className='cell'><span>{`${past.days.toLocaleString()}`}</span>天</div>
          <div className='cell'><span>{`${past.hours.toLocaleString()}`}</span>小时</div>
          <div className='cell'><span>{`${past.minutes.toLocaleString()}`}</span>分钟</div>
          <div className='cell'><span>{`${past.seconds.toLocaleString()}`}</span>秒</div>
        </div>        
        <Setting 
          active={this.state.settingActive} 
          toggleActive={this.toggleSetting.bind(this)} 
          handleDateChange={this.handleDateChange.bind(this)} 
          currentDate={this.state.birth}
        />
      </div> :
      <div style={{textAlign: 'center', color: '#fff'}}>fuck</div>
  }
}