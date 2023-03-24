import './SearchBar.css'
import React from 'react'

function SearhBar() {
  return (
    <div className="SearchBar">
      <img
        className="imgDuck"
        src="https://duckduckgo.com/assets/logo_homepage.alt.v108.svg"
        alt="logo"
      />
      <div className="divSearch">
        <input
          className="barr"
          type="text"
          placeholder="Search the web without being tracked"
        />
        <button className="btn2" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default SearhBar
