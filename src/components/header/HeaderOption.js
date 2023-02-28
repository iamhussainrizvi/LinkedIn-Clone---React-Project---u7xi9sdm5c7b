import React from 'react'

function HeaderOption({icon,title,avatar }) {
  return (
    <div className='header__options'>
    {icon}
    {avatar}
    <span>{title}</span>
    </div>
  )
}

export default HeaderOption