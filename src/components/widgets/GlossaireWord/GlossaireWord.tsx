import React, { useState, useEffect } from 'react'

const GlossaireWord = (props: GlossaireWordProps) => {
  return (
    <div id={props.name} className={"GlossaireWord"}>
      <h3>{props.name}</h3>
      <p>
        {props.desc}
      </p>
    </div>
  )
}

interface GlossaireWordProps {
  name: string
  desc: string
}

export default GlossaireWord