import React, { useState, useEffect, useContext } from 'react'

import { Assets, } from '../../../context'

const HomePage = (props: HomePageProps) => {
  const assets = useContext(Assets)

  return (
    <div id="HomePage">
      <header>
        <img src={assets.photoDeClasse} alt="La photo de classe." />
      </header>
      <div className="title">
        <h1>Sigma - MPSI 1</h1>
        <p className="subtitle">depuis 1854</p>
      </div>
      <nav>
      </nav>
      <section className="presentation">
        <article className="ginette">
          <div className="left-part"></div>
          <div className="right-part"></div>
        </article>
        <article className="sigma">
          <div className="left-part"></div>
          <div className="right-part"></div>
        </article>
        <article className="traditions">
          <div className="left-part"></div>
          <div className="right-part"></div>
        </article>
      </section>
      <section className="students"></section>
      <section className="matters"></section>
      <footer></footer>
    </div>
  )
}

interface HomePageProps {
}

export default HomePage