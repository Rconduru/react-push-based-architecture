import React from 'react'
import './App.css'
import TagManager from './components/TagManager'
import GlobalStyle from './styles/global'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TagManager></TagManager>
    </div>
  )
}

export default App
