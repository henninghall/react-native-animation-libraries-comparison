import React, {useState} from 'react'
import {MainPage} from './pages/MainPage'
import {LibPage} from './pages/LibPage'

const App = () => {
  const [lib, setLib] = useState(null)
  const [heavyLoad, setHeavyLoad] = useState(null)
  const onBack = () => setLib(null)

  if (lib) {
    return <LibPage lib={lib} onBack={onBack} heavyLoad={heavyLoad} />
  }
  return (
    <MainPage
      setLib={setLib}
      setHeavyLoad={setHeavyLoad}
      heavyLoad={heavyLoad}
    />
  )
}

export default App
