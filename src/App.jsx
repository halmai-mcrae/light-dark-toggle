import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { SunFill, MoonStarsFill } from 'react-bootstrap-icons'
import Templates from './components/Templates'
import Snippets from './components/Snippets'
import GuestBook from './components/GuestBook'
import About from './components/About'
import Home from './components/Home'
import NavBar from './components/NavBar'
import logo from './logos/logo.svg'
import logojs from './logos/logojs.svg'
import logobs from './logos/logobs.svg'
import logots from './logos/logots.svg'
import logoos from './logos/logoos.svg'
import logong from './logos/logong.svg'
import './App.css'
//Imports

//Themes
const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
})

function useDarkMode() {
  const [theme, setTheme] = useState('light')
  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const localTheme =
      localStorage.getItem('theme')
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])
  return { theme, toggleTheme }
}

function App() {
  const darkMode = useDarkMode()

  return (
    <ThemeContext.Provider value={darkMode}>
      <div
        className={`app ${
          darkMode.theme === 'dark'
            ? 'dark-mode'
            : 'light-mode'
        }`}
      >
        {/* Nav And Header*/}
        <NavBar />
        <header className="app-header">
          {/* Logos */}
          <div className="row">
          <div className="col-4">
              <img
                src={logojs}
                className="js-logo"
                alt="logojs"
              />
            </div>
            <div className="col-4">
              <img
                src={logo}
                className="app-logo"
                alt="logo"
              />
            </div>
            <div className="col-4">
              <img
                src={logobs}
                className="bs-logo"
                alt="logobs"
              />
            </div>
          </div>
          <div className="row">
          <div className="col-4">
              <img
                src={logots}
                className="ts-logo"
                alt="logots"
              />
            </div>
            <div className="col-4">
              <img
                src={logoos}
                className="os-logo"
                alt="logoos"
              />
            </div>
            <div className="col-4">
              <img
                src={logong}
                className="ng-logo"
                alt="logong"
              />
            </div>
          </div>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={darkMode.toggleTheme}
          >{darkMode.theme === 'light' ? <MoonStarsFill size={25}/> : <SunFill  size={28}/>}
          </button>
          
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/"
            element={<Home />} />
          <Route
            path="/about"
            element={<About />}
          />
            <Route
            path="/guestbook"
            element={<GuestBook />}
          />
          <Route
            path="/snippets"
            element={<Snippets />}
          />
          <Route
            path="/templates"
            element={<Templates />}
          />
        </Routes>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
