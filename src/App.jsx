import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import NavBar from './components/NavBar'
import logo from './logo.svg'
import logojs from './logojs.svg'
import logobs from './logobs.svg'
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
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={darkMode.toggleTheme}
          >
            Toggle Mode
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
        </Routes>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
