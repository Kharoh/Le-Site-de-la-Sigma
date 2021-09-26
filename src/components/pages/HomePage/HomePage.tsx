import React, { useState, useEffect, useContext } from 'react'

import { Assets, } from '../../../context'

const HomePage = (props: HomePageProps) => {
  const assets = useContext(Assets)

  return (
    <div id="HomePage">
      {/* voir maquette */}
    </div>
  )
}

interface HomePageProps {
}

export default HomePage