import React from 'react'
import moment from 'moment'
import './Counter.css'
const iconSetting = require('./img/settings.svg')

export class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      birth: moment('1994-09-07 10:00:00'),
      settingActive: false
    }    
  }
  componentWillMount () {              
    this.setState(this.count())    
  }
  count () {
    let now = moment()
    return {
      days: now.diff(this.state.birth, 'days'),
      hours: now.diff(this.state.birth, 'hours'),
      minutes: now.diff(this.state.birth, 'minutes'),
      seconds: now.diff(this.state.birth, 'seconds')
    }
  }
  // activeSetting (e) {
  //   e.preventDefault()   
  //   this.setState({
  //     settingActive: !this.state.settingActive
  //   }) 
  // }
  // handleDateChange (v) {
  //   console.log(v)
  // }
  componentDidMount () {
    // setInterval(() => {
    //   this.setState(this.count())
    // }, 1000)
  }  
  render () {
    const {...past} = this.state
    console.log(past)
    return past.days && past.hours && past.seconds ? 
      <div className='counter'>
        <div className='box'>
          {'来到世上已经:'}
          <div className='cell'><span>{`${past.days.toLocaleString()}`}</span>天</div>
          <div className='cell'><span>{`${past.hours.toLocaleString()}`}</span>小时</div>
          <div className='cell'><span>{`${past.minutes.toLocaleString()}`}</span>分钟</div>
          <div className='cell'><span>{`${past.seconds.toLocaleString()}`}</span>秒</div>
        </div>
        {/*<div><a onClick={this.activeSetting.bind(this)}><img src={iconSetting} alt='setting' style={{width: 15, height: 15}}/></a></div>*/}
      </div> :
      <div style={{textAlign: 'center', color: '#fff'}}>fuck</div>
  }
}