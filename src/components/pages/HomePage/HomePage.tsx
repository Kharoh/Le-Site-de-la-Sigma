import React, { useState, useEffect, useContext } from 'react'

import { Assets, } from '../../../context'

import NavButton from '../../widgets/NavButton'
import PresentationArticle from '../../widgets/PresentationArticle'

const HomePage = (props: HomePageProps) => {
  const assets = useContext(Assets)

  return (
    <div id="HomePage">
      <header>
        <img src={assets.images.photoDeClasse} alt="La photo de classe." />
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
            <h6>L'école</h6>
            <h2><span className="bronze-text">Ginette</span></h2>
            <p>Voici l'abréviation la plus répandue de "Lycée Privé Sainte-Geneviève".</p>
            <p>Pour nous, ce nom signifie <strong>beaucoup</strong>.</p>
            <p>Au fond, Ginette c'est bien plus qu'une simple prépa, et c'est ce que nous allons essayer de vous communiquer un peu à travers notre site de classe.</p>
          </>}
          rightPart={<>
            <div className="image-container">
              <img src={assets.images.ginette} alt="Une belle image du bâtiment notre dame." />
            </div>
            <div className="sub">Une image du bâtiment Notre Dame vu du terrain d'honneur.</div>
          </>}
        />
        <PresentationArticle
          type="normal"
          className="sigma"
          leftPart={<>
            <div className="image-container">
              <img src={assets.images.ginette} alt="Une belle image du bâtiment notre dame." />
            </div>
            <div className="sub">Une photographie de notre classe complètement réunie.</div>
          </>}
          rightPart={<>
            <h6>La classe</h6>
            <h2>La <span className="gold-text">Sigma</span></h2>
            <p><strong>Sigma</strong>, c'est le nom d'une lettre grecque, mais c'est aussi notre nom de classe.</p>
            <p>La bonne entente dans la classe entière est un pilier de <strong>l'esprit co</strong> qui anime Ginette.</p>
            <p></p>
          </>}
        />
      </section>
      <section id="traditions-section">
        <h6>Un plus qui fait la différence</h6>
        <h2>Les traditions</h2>
        <p>
          Une grande partie de la vie à Ginette est guidée par les <span className="gold-text">traditions</span>.
          Chaque année, les nouvelles promotions héritent de traditions ancestrales, certaines sont délirantes tandis que d'autres se fondent sur <span className="iron-text">d'excellents principes</span>.
          Toutes ces traditions existent pour rendre l'expérience Ginette <span className="bronze-text">encore plus forte et agréable.</span>
        </p>
        <div className="traditions-container">
          <div className="tradition galanterie">
            <div className="inner">
              <h3>La galanterie</h3>
            </div>
          </div>
          <div className="tradition chant">
            <div className="inner">
              <h3>Le chant de pale</h3>
            </div>
          </div>
          <div className="tradition rock">
            <div className="inner">
              <h3>Danser le rock</h3>
            </div>
          </div>
        </div>
      </section>
      <section id="students-section">
        <h6>Ceux sans qui la sigma ne serait pas la sigma</h6>
        <h2>Les élèves</h2>
      </section>
      <section id="work-section"></section>
      <footer></footer>
    </div>
  )
}

interface HomePageProps {
}

export default HomePage