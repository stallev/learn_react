import React, { useState } from 'react'

type HeaderProps = {
  title?: string,
  children?: any,
}

const Header = ({
  children,
  title = 'Default Title'
  }: HeaderProps) => {
    
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

export default Header
