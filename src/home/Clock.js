import React from 'react'
import './Clock.scss'
import _ from 'lodash'

export class Clock extends React.Component {
  constructor (props) {
    super(props)    
    let time = this.getTime()
    let positions = this.getPosition(time)
    this.state = {
      time : {...time},
      position: {
        ...positions
      }
    }
  }
  
  componentDidMount () {
    setInterval(() => {
      this.refreshState()
    }, 1000)
  }
  getTime () {
    // let now = new Date(2017, 6, 22, 2, 0, 45)
    let now = new Date()
    return {
      hour: now.getHours(),
      minute: now.getMinutes(),
      second: now.getSeconds()
    }
  }
  getPosition (time) {
    let { hour, minute, second } = time
    let positionS = (180 + 360*(second/60)) % 360
    let positionM = (180 + 360*(minute/60)) % 360
    let positionH = (180 + 360*(hour/12) + 30*(minute/60)) % 360
    return {
      positionS,
      positionM,
      positionH
    }
  }
  refreshState () {
    let time = this.getTime()
    let position = this.getPosition(time)
    this.setState({
      time: {
        ...time
      },
      position: {
        ...position
      }
    })
  }
  
  
  render () {
    const {position: {positionH, positionM, positionS}} = this.state   
    const ticks = _.map(_.fill(new Array(12), 1), (el, idx) => <div className='single-tick' key={idx}></div>)          
    return (      
      <div className='clock-outline'>
        <div className='clock-center'></div>
        <div className='clock-ticks'>
          {ticks}
        </div>                
        <div className='clock-hour-pointer' style={{          
          transform: `translate(-2px, 0) rotate(${positionH}deg) `
        }} ></div>
        <div className='clock-minute-pointer' style={{          
          transform: `translate(-1px, 0) rotate(${positionM}deg) `
        }}></div>
        <div className='clock-second-poionter' style={{          
          transform: `translate(-0.5px, 0) rotate(${positionS}deg) `
        }}></div>
      </div>      
    )
  }
}