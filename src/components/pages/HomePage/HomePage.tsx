import React, { useState, useEffect, useContext } from 'react'

import { Assets, } from '../../../context'

import NavButton from '../../widgets/NavButton'
import PresentationArticle from '../../widgets/PresentationArticle'
import Student from '../../widgets/Student'
import SubjectArticle from '../../widgets/SubjectArticle'
import GlossaireWord from '../../widgets/GlossaireWord'

const HomePage = (props: HomePageProps) => {
  const assets = useContext(Assets)

  /* If we need to display the glossary */
  const [pageDisplayed, displayPage] = useState('normal')

  /* Generate the student list and the students components to display */
  const [studentNumber, setStudentNumber] = useState(3)
  const [shuffledStudentsList] = useState(Object.values(assets.students).sort(() => Math.random() - 0.5))
  const studentsDisplayed: React.ReactNode[] = []

  for (let i = 0; i < studentNumber; i++) {
    if (i >= shuffledStudentsList.length) break
    const studentToDisplay = shuffledStudentsList[i]
    studentsDisplayed.push(
      <Student
        key={studentToDisplay.firstName}
        student={studentToDisplay}
      />
    )
  }

  const wordsDisplayed: React.ReactNode[] = (assets.glossaire as unknown as { name: string, desc: string }[])
    .sort((wordA, wordB) => wordA.name < wordB.name ? -1 : 1)
    .map(word => <GlossaireWord key={word.name} name={word.name} desc={word.desc} />)

  if (pageDisplayed === 'glossaire') return (
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
        <NavButton
          href="#presentation-section"
          className="presentation"
          onClick={() => displayPage('normal')}
        >
          La classe
        </NavButton>
        <NavButton
          href="#students-section"
          className="students"
          onClick={() => displayPage('normal')}
        >
          Les ??l??ves
        </NavButton>
        <NavButton
          href="#work-section"
          className="work"
          onClick={() => displayPage('normal')}
        >
          Le travail
        </NavButton>
        <NavButton
          href="#glossaire-section"
          className="glossaire"
          onClick={() => displayPage('glossaire')}
        >
          Le glossaire
        </NavButton>
      </nav>
      <section id="glossaire-section">
        {wordsDisplayed}
      </section>
      <footer>
        <div className="made-by">
          <p>
            Ce site a ??t?? r??alis?? par les CD Web <span className="gold-text">Baptiste Callieux</span> et <span className="gold-text">Lucas Jung</span>
          </p>
        </div>
        <div className="links">
          <div className="utility">
            <p className="title">Liens utiles</p>
            <a href="https://www.bginette.com/" target="_blank"><p>Site de Ginette</p></a>
            <a onClick={() => displayPage('normal')}><p>Glossaire</p></a>
            <a onClick={() => displayPage('time')}><p>Emploi du temps</p></a>
          </div>
          <div className="classes">
            <p className="title">Les autres classes</p>
            <a href="http://www.taupe.bginette.net/"><p>Taupe</p></a>
          </div>
        </div>
      </footer>
    </div>
  )

  if (pageDisplayed === 'time') return (
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
        <NavButton
          href="#presentation-section"
          className="presentation"
          onClick={() => displayPage('normal')}
        >
          La classe
        </NavButton>
        <NavButton
          href="#students-section"
          className="students"
          onClick={() => displayPage('normal')}
        >
          Les ??l??ves
        </NavButton>
        <NavButton
          href="#work-section"
          className="work"
          onClick={() => displayPage('normal')}
        >
          Le travail
        </NavButton>
        <NavButton
          href="#glossaire-section"
          className="glossaire"
          onClick={() => displayPage('glossaire')}
        >
          Le glossaire
        </NavButton>
      </nav>
      <section id="time-section">
        {wordsDisplayed}
      </section>
      <footer>
        <div className="made-by">
          <p>
            Ce site a ??t?? r??alis?? par les CD Web <span className="gold-text">Baptiste Callieux</span> et <span className="gold-text">Lucas Jung</span>
          </p>
        </div>
        <div className="links">
          <div className="utility">
            <p className="title">Liens utiles</p>
            <a href="https://www.bginette.com/" target="_blank"><p>Site de Ginette</p></a>
            <a onClick={() => displayPage('glossaire')}><p>Glossaire</p></a>
            <a onClick={() => displayPage('normal')}><p>Emploi du temps</p></a>
          </div>
          <div className="classes">
            <p className="title">Les autres classes</p>
          </div>
        </div>
      </footer>
    </div>
  )

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
        <NavButton
          href="#presentation-section"
          className="presentation"
          onClick={() => displayPage('normal')}
        >
          La classe
        </NavButton>
        <NavButton
          href="#students-section"
          className="students"
          onClick={() => displayPage('normal')}
        >
          Les ??l??ves
        </NavButton>
        <NavButton
          href="#work-section"
          className="work"
          onClick={() => displayPage('normal')}
        >
          Le travail
        </NavButton>
        <NavButton
          href="#glossaire-section"
          className="glossaire"
          onClick={() => displayPage('glossaire')}
        >
          Le glossaire
        </NavButton>
      </nav>
      <section id="presentation-section">
        <PresentationArticle
          type="normal"
          className="ginette"
          leftPart={<>
            <h6>L'??cole</h6>
            <h2><span className="bronze-text">Ginette</span></h2>
            <p>Voici l'abr??viation la plus r??pandue de "Lyc??e Priv?? Sainte-Genevi??ve".</p>
            <p>Pour nous, ce nom signifie <strong>beaucoup</strong>.</p>
            <p>Au fond, Ginette c'est bien plus qu'une simple pr??pa, et c'est ce que nous allons essayer de vous communiquer un peu ?? travers notre site de classe.</p>
          </>}
          rightPart={<>
            <div className="image-container">
              <img src={assets.images.ginette} alt="Une belle image du b??timent notre dame." />
            </div>
            <div className="sub">Une image du b??timent Notre Dame vu du terrain d'honneur.</div>
          </>}
        />
        <PresentationArticle
          type="normal"
          className="sigma"
          leftPart={<>
            <div className="image-container">
              <img src={assets.images.sigma} alt="Une belle image du b??timent notre dame." />
            </div>
            <div className="sub">Photographie d'une partie de notre classe en d??but d'ann??e. On peut encore y observer nos jeunes t??tes na??ves d??pourvues du futur maquillage pr??pa.</div>
          </>}
          rightPart={<>
            <h6>La classe</h6>
            <h2>La <span className="gold-text">Sigma</span></h2>
            <p><strong>Sigma</strong>, c'est le nom d'une lettre grecque, mais c'est aussi notre nom de classe.</p>
            <p>La bonne entente dans la classe enti??re est un pilier de <strong>l'esprit co</strong> qui anime Ginette.</p>
            <p>Il faut encore ??crire quelque chose ici, de pr??f??rence ce serait bien de parler de la classe pour remplir un peu le c??t?? de l'image et que ce ne soit pas trop d??pourvu en texte, merci.</p>
          </>}
        />
      </section>
      <section id="traditions-section">
        <h6>Un plus qui fait la diff??rence</h6>
        <h2>Les traditions</h2>
        <p>
          Une grande partie de la vie ?? Ginette est guid??e par les <span className="gold-text">traditions</span>.
          Chaque ann??e, les nouvelles promotions h??ritent de traditions ancestrales, certaines sont d??lirantes tandis que d'autres se fondent sur <span className="iron-text">d'excellents principes</span>.
          Toutes ces traditions existent pour rendre l'exp??rience Ginette <span className="bronze-text">encore plus forte et agr??able.</span>
        </p>
        <div className="traditions-container">
          <div className="tradition galanterie">
            <div className="inner">
              <h3>La galanterie</h3>
              <p>
                C'est un devoir ?? Ginette ! En MPSI nous n'avons pas la chance d'avoir une parit?? parfaite, c'est le moins qu'on puisse dire...
                Et comme en Sigma on a les plus belles filles, on met un point d'honneur ?? ??tre courtois, distingu?? et ??l??gants avec elles !
                Bref tu l'auras compris : la galanterie est une chose <strong>over importante</strong> ?? Ginette, et tout particuli??rement en Sigma !
              </p>
              <h4>Adam, CD Gal</h4>
            </div>
          </div>
          <div className="tradition chant">
            <div className="inner">
              <h3>Le chant de pale</h3>
              <p>
                C'est un devoir ?? Ginette ! En MPSI nous n'avons pas la chance d'avoir une parit?? parfaite, c'est le moins qu'on puisse dire...
                Et comme en Sigma on a les plus belles filles, on met un point d'honneur ?? ??tre courtois, distingu?? et ??l??gants avec elles !
                Bref tu l'auras compris : la galanterie est une chose <strong>over importante</strong> ?? Ginette, et tout particuli??rement en Sigma !
              </p>
              <h4>Malo, CD Cri</h4>
            </div>
          </div>
          <div className="tradition rock">
            <div className="inner">
              <h3>Danser le rock</h3>
              <p>
                C'est un devoir ?? Ginette ! En MPSI nous n'avons pas la chance d'avoir une parit?? parfaite, c'est le moins qu'on puisse dire...
                Et comme en Sigma on a les plus belles filles, on met un point d'honneur ?? ??tre courtois, distingu?? et ??l??gants avec elles !
                Bref tu l'auras compris : la galanterie est une chose <strong>over importante</strong> ?? Ginette, et tout particuli??rement en Sigma !
              </p>
              <h4>Maria et Marin, CD Rock</h4>
            </div>
          </div>
        </div>
      </section>
      <section id="students-section">
        <h6>Ceux sans qui la sigma ne serait pas la sigma</h6>
        <h2>Les ??l??ves</h2>
        <div className="students">
          {studentsDisplayed}
        </div>
        {studentNumber < shuffledStudentsList.length ? <div className="append" onClick={() => setStudentNumber(studentNumber + 3)}>Afficher plus</div> : ''}
      </section>
      <section id="work-section">
        <h6>Le vrai plaisir de la pr??pa</h6>
        <h2>Le travail</h2>
        <div className="subjects">
          <SubjectArticle
            className="maths"
            type="left"
            greekLetter={<img src={assets.images.omega} />}
            title="Math??matiques"
            titleType='gold'
            desc={
              <p>
                Une grande partie de la vie ?? Ginette est guid??e par les <span className="gold-text">traditions</span>.
                Chaque ann??e, les nouvelles promotions h??ritent de traditions ancestrales, certaines sont d??lirantes tandis que d'autres se fondent sur <span className="iron-text">d'excellents principes</span>.
                Toutes ces traditions existent pour rendre l'exp??rience Ginette <span className="bronze-text">encore plus forte et agr??able.</span>
              </p>
            }
          />
          <SubjectArticle
            className="physics"
            type="right"
            greekLetter={<img src={assets.images.phi} />}
            title="Physique"
            titleType='gold'
            desc={
              <p>
                Une grande partie de la vie ?? Ginette est guid??e par les <span className="gold-text">traditions</span>.
                Chaque ann??e, les nouvelles promotions h??ritent de traditions ancestrales, certaines sont d??lirantes tandis que d'autres se fondent sur <span className="iron-text">d'excellents principes</span>.
                Toutes ces traditions existent pour rendre l'exp??rience Ginette <span className="bronze-text">encore plus forte et agr??able.</span>
              </p>
            }
          />
          <SubjectArticle
            className="engineering"
            type="left"
            greekLetter={<img src={assets.images.psy} />}
            title="S.I."
            titleType='iron'
            desc={
              <p>
                Une grande partie de la vie ?? Ginette est guid??e par les <span className="gold-text">traditions</span>.
                Chaque ann??e, les nouvelles promotions h??ritent de traditions ancestrales, certaines sont d??lirantes tandis que d'autres se fondent sur <span className="iron-text">d'excellents principes</span>.
                Toutes ces traditions existent pour rendre l'exp??rience Ginette <span className="bronze-text">encore plus forte et agr??able.</span>
              </p>
            }
          />
          <SubjectArticle
            className="informatic"
            type="right"
            greekLetter={<img src={assets.images.iota} />}
            title="Informatique"
            titleType='iron'
            desc={
              <p>
                Une grande partie de la vie ?? Ginette est guid??e par les <span className="gold-text">traditions</span>.
                Chaque ann??e, les nouvelles promotions h??ritent de traditions ancestrales, certaines sont d??lirantes tandis que d'autres se fondent sur <span className="iron-text">d'excellents principes</span>.
                Toutes ces traditions existent pour rendre l'exp??rience Ginette <span className="bronze-text">encore plus forte et agr??able.</span>
              </p>
            }
          />
          <SubjectArticle
            className="french"
            type="left"
            greekLetter={<img src={assets.images.alpha} />}
            title="Fran??ais"
            titleType='bronze'
            desc={
              <p>
                Une grande partie de la vie ?? Ginette est guid??e par les <span className="gold-text">traditions</span>.
                Chaque ann??e, les nouvelles promotions h??ritent de traditions ancestrales, certaines sont d??lirantes tandis que d'autres se fondent sur <span className="iron-text">d'excellents principes</span>.
                Toutes ces traditions existent pour rendre l'exp??rience Ginette <span className="bronze-text">encore plus forte et agr??able.</span>
              </p>
            }
          />
          <SubjectArticle
            className="sport"
            type="right"
            greekLetter={<img src={assets.images.lambda} />}
            title="Sport"
            titleType='bronze'
            desc={
              <p>
                Une grande partie de la vie ?? Ginette est guid??e par les <span className="gold-text">traditions</span>.
                Chaque ann??e, les nouvelles promotions h??ritent de traditions ancestrales, certaines sont d??lirantes tandis que d'autres se fondent sur <span className="iron-text">d'excellents principes</span>.
                Toutes ces traditions existent pour rendre l'exp??rience Ginette <span className="bronze-text">encore plus forte et agr??able.</span>
              </p>
            }
          />
        </div>
      </section>
      <footer>
        <div className="made-by">
          <p>
            Ce site a ??t?? r??alis?? par les CD Web <span className="gold-text">Baptiste Callieux</span> et <span className="gold-text">Lucas Jung</span>
          </p>
        </div>
        <div className="links">
          <div className="utility">
            <p className="title">Liens utiles</p>
            <a href="https://www.bginette.com/" target="_blank"><p>Site de Ginette</p></a>
            <a onClick={() => displayPage('glossaire')}><p>Glossaire</p></a>
            <a onClick={() => displayPage('time')}><p>Emploi du temps</p></a>
          </div>
          <div className="classes">
            <p className="title">Les autres classes</p>
            <div className="list">
              <a href="http://www.taupe.bginette.net/"><p>Taupe</p></a>
              <a href="http://www.taupe.bginette.net/"><p>Ellipse</p></a>
              <a href="http://www.taupe.bginette.net/"><p>Atom</p></a>
              <a href="http://www.taupe.bginette.net/"><p>Piston</p></a>
              <a href="http://www.taupe.bginette.net/"><p>Agros</p></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface HomePageProps {
}

export default HomePage