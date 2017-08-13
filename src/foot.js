import React from 'react'
import Images from './img'
import Popover from 'material-ui/Popover'

require('./index.css')

export default class Footer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }
  handleClick (event) {
    this.setState({
      open: !this.state.open,
      anchorEl: event.currentTarget
    })
  }
  render () {
    return (
      <div className='footer'>
        <div>
          Created and owned by Wang Weitao.
        </div>        
        <div>
          Contact me on
          <a href='https://github.com/weita0' rel="noopener norefferrer" target='_blank'><img src={Images.github} alt='github' /></a>
          <a onClick={this.handleClick.bind(this)} ><img src={Images.wechat_logo} alt='wechat' /></a>
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}     
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}   
            onRequestClose={this.handleClick.bind(this)}    
          >
            <img src={Images.wechat_qr} alt='qr' style={{ width: 269.6, height: 357.4 }}/>
          </Popover>
        </div>
      </div>
    )
  }
}