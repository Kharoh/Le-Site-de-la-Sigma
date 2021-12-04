import React, { useState, useEffect } from 'react'

const PresentationArticle = (props: PresentationArticleProps) => {
  return (
    <article className={"PresentationArticle " + props.type + " " + props.className} >
      <div className="left-part part"> {props.leftPart} </div>
      <div className="right-part part"> {props.rightPart} </div>
    </article>
  )
}

interface PresentationArticleProps {
  type: "normal" | "alternative"
  className: string
  rightPart: React.ReactFragment
  leftPart: React.ReactFragment
}

export default PresentationArticle