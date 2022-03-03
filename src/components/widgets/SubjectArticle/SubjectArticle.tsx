import React, { useState, useEffect } from 'react'

const SubjectArticle = (props: SubjectArticleProps) => {
  return (
    <article className={"SubjectArticle " + props.type + " " + props.className}>
      <div className="greek-letter">{props.greekLetter}</div>
      <h3 className={"subject-name " + props.titleType}>
        <span className={props.titleType + "-text"}>
          {props.title}
        </span>
      </h3>
      <div className="desc">{props.desc}</div>
    </article>
  )
}

interface SubjectArticleProps {
  className: string
  type: "left" | "right"
  greekLetter: React.ReactNode
  title: string
  titleType: "gold" | "silver" | "iron" | "bronze" | "rainbow"
  desc: React.ReactNode
}

export default SubjectArticle