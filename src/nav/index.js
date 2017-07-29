import React from 'react'
import { MenuButton } from './MenuButton'
import { MenuList } from './MenuList'
import './menu.scss'

export default class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuExpand: false
    }
  }
  toggleMenu (v) {
    console.log(v.target.checked)
    this.setState({
      menuExpand: v.target.checked
    })
  }
  render () {
    return (
      <div className='menu-wrapper'>
        <MenuButton handleClick={this.toggleMenu.bind(this)} />
        {
          this.state.menuExpand &&
          <MenuList />
        }
      </div>
    )
  }
}