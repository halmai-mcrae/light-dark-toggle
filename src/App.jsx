import React, { useState, useEffect } from 'react'
import {
  Routes,
  Route,
  Link,
} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import logo from './logo.svg'
import './App.css'

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
        className={`App ${
          darkMode.theme === 'dark'
            ? 'dark-mode'
            : 'light-mode'
        }`}
      >
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
          />
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={darkMode.toggleTheme}
          >
            Toggle Mode
          </button>

          {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        </header>
        <div>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            ></Route>
            <Route
              path="/about"
              element={<About />}
            />
          </Routes>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
