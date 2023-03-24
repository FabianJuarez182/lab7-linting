import './InstallTo.css'
import React from 'react'

function InstallTo() {
  return (
    <div className="InstallTo">
      <h1 className="title">Tired of being tracked online? We can help</h1>
      <p>
        We don&#39;t store your personal info. We don&#39;t follow you around
        with ads.
      </p>
      <p>We don&#39;t track you. Ever.</p>
      <div className="buttonContainer">
        <button type="button" className="addTo">
          Add DuckDuckGo to Safari
        </button>
      </div>
      <p className="advice">Trusted by tens of millions worldwide!</p>
    </div>
  )
}

export default InstallTo
