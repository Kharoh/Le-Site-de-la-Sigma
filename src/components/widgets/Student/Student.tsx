import React, { useState, useEffect, useContext } from 'react'
import StudentObject from '../../../assets/classes/Student'

import { Assets } from '../../../context'

const Student = (props: StudentProps) => {
  const assets = useContext(Assets)

  /* Create the array to display the cds */
  const cdsList = props.student.cds
  const cdsDisplayed: React.ReactNode[] = cdsList
    .map(cd =>
      <div className="cd" style={{ backgroundColor: cd.color }}>
        {cd.name}
      </div>
    )

  return (
    <div className="Student">
      <div className="photo-container">
        <img src={assets.images[props.student.firstName.toLowerCase() as keyof typeof assets.images]} alt="" />
      </div>
      <div className="name">
        <h4>
          {props.student.firstName}
        </h4>
      </div>
      <div className="cds-container">
        {cdsDisplayed}
      </div>
      <div className="desc-container">
        {props.student.desc}
      </div>
    </div>
  )
}

interface StudentProps {
  student: StudentObject
}

export default Student