import React, { useState, useEffect } from 'react'

const NavButton = (props: NavButtonProps) => {
  return (
    <div className={"NavButton " + props.className} >
      <a href={props.href}>
        {props.children}
      </a>
    </div>
  )
}

interface NavButtonProps {
  href: string
  className: string
  children: string
}

export default NavButton