import React from 'react'
import moment from 'moment'
import './Counter.css'

export class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      birth: moment('1994-09-07 10:00:00'),
    }    
  }
  componentWillMount () {
    this.setState(...this.count())
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
  componentDidMount () {
    setInterval(() => {
      this.setState(this.count())
    }, 1000)
  }
  render () {
    const {...past} = this.state
    return past.days && past.hours && past.seconds ? 
      <div className='counter'>
        <div className='box'>
          {'来到世上已经:'}
          <div className='cell'><span>{`${past.days.toLocaleString()}`}</span>天</div>
          <div className='cell'><span>{`${past.hours.toLocaleString()}`}</span>小时</div>
          <div className='cell'><span>{`${past.minutes.toLocaleString()}`}</span>分钟</div>
          <div className='cell'><span>{`${past.seconds.toLocaleString()}`}</span>秒</div>
        </div>
      </div> :
      <div></div>
  }
}