import React from 'react'
import menuConfig from './menu.config'
import { Link } from 'react-router-dom'

export class MenuList extends React.Component {
  render () {
    return (
      <ul>
        {
          menuConfig.map((el, idx) =>
            <li key={idx}><Link to={el.route}>{el.name}</Link></li>
          )
        }
      </ul>
    )
  }
}