import React from 'react'

export class MenuButton extends React.Component {      
  render () {
    const { handleClick } = this.props
    return (      
      <label className='menu-controler'>
        <input type='checkbox' onChange={handleClick} />
        <div className='menu-bar'></div>        
      </label>              
    )
  }
}