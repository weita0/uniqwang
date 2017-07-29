import React from 'react'
import menuConfig from './menu.config'
import { Link } from 'react-router-dom'
import './menu.scss'

export class MenuButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuExpand: false
    }
  }
  toggleMenu (v) {
    this.setState ({
      menuExpand: v.target.checked
    })
  }
  render () {
    return (
      <div className='menu-wrapper'>
        <label className='menu-controler'>
          <input type='checkbox' onChange={this.toggleMenu.bind(this)} />
          <div className='menu-bar'></div>        
        </label>
        {
          this.state.menuExpand && 
          <ul>
            {
              menuConfig.map((el, idx) =>
                <li key={idx}><Link to={el.route}>{el.name}</Link></li>
              )
            }
          </ul>
        }
      </div>
    )
  }
}