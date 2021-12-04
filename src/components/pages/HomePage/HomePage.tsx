import React, { useState, useEffect, useContext } from 'react'

import { Assets, } from '../../../context'

import NavButton from '../../widgets/NavButton'
import PresentationArticle from '../../widgets/PresentationArticle'

const HomePage = (props: HomePageProps) => {
  const assets = useContext(Assets)

  return (
    <div id="HomePage">
      <header>
        <img src={assets.photoDeClasse} alt="La photo de classe." />
      </header>
      <div className="title">
        <h1>Sigma</h1>
        <p className="subtitle">MPSI 1 - depuis 1854</p>
      </div>
      <nav>
        <div></div>
        <NavButton href="#presentation-section" className="presentation">
          La classe
        </NavButton>
        <NavButton href="#students-section" className="students">
          Les élèves
        </NavButton>
        <NavButton href="#work-section" className="work">
          Le travail
        </NavButton>
        <NavButton href="#glossaire-section" className="glossaire">
          Le glossaire
        </NavButton>
      </nav>
      <section id="presentation-section">
        <PresentationArticle
          type="normal"
          className="ginette"
          leftPart={<>

          </>}
          rightPart={<>
            <img src={assets.ginette} alt="Une belle image du bâtiment notre dame." />
            <div className="sub">Une belle image du bâtiment notre dame vu du terrain d'honneur.</div>
            <img src={assets.ginette} alt="Une belle image du bâtiment notre dame." />
          </>}
        />
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
      <section id="students-section"></section>
      <section id="work-section"></section>
      <footer></footer>
    </div>
  )
}

interface HomePageProps {
}

export default HomePage