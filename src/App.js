import React, { useState, useEffect } from 'react'
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
          <button
            type="button"
            class="btn btn-outline-secondary"
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
      </div>
    </ThemeContext.Provider>
  )
}

export default App
