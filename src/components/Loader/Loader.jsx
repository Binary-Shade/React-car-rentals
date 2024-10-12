import React from 'react'
import './loader.css'
const Loader = () => {
  return (
    <div className="loader">
        <svg viewBox="0 0 80 80">
            <circle r="32" cy="40" cx="40" id="test"></circle>
        </svg>
    </div>
  )
}

export default Loader