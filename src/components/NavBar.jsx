import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'

const SearchContext = React.createContext({
  searchValue: '',
  setSearchValue: () => {},
  searchResults: [],
  setSearchResults: () => {}
});

function useSearchBar() {
const [searchValue, setSearchValue] = useState('')
const [searchResults, setSearchResults] = useState([])
const blogPosts = [
  {title: 'Post 1', content: 'Content 1'},
  {title: 'Post 2', content: 'Content 2'},
  {title: 'Post 3', content: 'Content 3'},
  {title: 'Post 4', content: 'Content 4'},
  {title: 'Post 5', content: 'Content 5'}
]

useEffect(() => {
  const results = blogPosts.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase()))
  setSearchResults(results)
}, [searchValue])

return { searchValue, setSearchValue, searchResults, setSearchResults }
}

export { SearchContext, useSearchBar };

const NavBar = () => {
  const search = useSearchBar()

  return (
    <SearchContext.Provider value={search}>
    <nav className="navbar">
      <div className="btn-group" role="group" aria-label="Basic example">
      <Link to="/"> <button
            type="button"
            className="btn btn-outline-secondary"
            style = {{margin: '5px'}}
          >
            Home
          </button>
          </Link>
      <Link to="/about">
      <button
            type="button"
            className="btn btn-outline-secondary"
            style = {{margin: '5px'}}
          >
            About
          </button>
      </Link>
      <Link to="/templates">
      <button
            type="button"
            className="btn btn-outline-secondary"
            style = {{margin: '5px'}}
          >
            Templates
          </button>
      </Link>
      <Link to="/snippets">
      <button
            type="button"
            className="btn btn-outline-secondary"
            style = {{margin: '5px'}}
          >
            Snippets
          </button>
      </Link>
      <Link to="/guestbook">
      <button
            type="button"
            className="btn btn-outline-secondary"
            style = {{margin: '5px'}}
          >
            Guestbook
          </button>
      </Link>
          <span />
          <span />
          <span />
      </div>
      <form
      style = {{margin: '10px'}}
      className="form-inline my-2 my-lg-0">
        <input 
          className="form-control mr-sm-2" 
          type="search" 
          placeholder="Search" 
          aria-label="Search" 
          value={search.searchValue} 
          onChange={e => search.setSearchValue(e.target.value)}
        />
      </form>
    </nav>
  </SearchContext.Provider>
  );
};

export default NavBar;