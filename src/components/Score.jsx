import React from 'react'

function Score({score}) {
  return (
 <div className="scoreContainer">
 <p className="scoreTitle">score</p>
  <h3 className="score">{score}</h3>
  </div>
    // <div>Score</div>
  )
}

export default Score