import React from 'react'
import moment from 'moment'
import './Counter.css'
const birth = moment('1994-09-07 10:00:00')

export class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ...this.count()
    }
  }
  count () {
    let now = moment()
    return {
      days: now.diff(birth, 'days'),
      hours: now.diff(birth, 'hours'),
      minutes: now.diff(birth, 'minutes'),
      seconds: now.diff(birth, 'seconds')
    }
  }
  componentDidMount () {
    setInterval(() => {
      this.setState(this.count())
    }, 1000)
  }
  render () {
    const {...past} = this.state
    return (
      <div className='counter'>
        {'已经来到世上'}
        <div className='box'>
          <div className='cell'>{`${past.days}天`}</div>
          <div className='cell'>{`${past.hours}小时`}</div>
          <div className='cell'>{`${past.minutes}分钟`}</div>
          <div className='cell'>{`${past.seconds}秒`}</div>
        </div>
      </div>
    )
  }
}