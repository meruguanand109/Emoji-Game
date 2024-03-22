// Write your code here.
import './index.css'

const NavBar = props => {
  const {scoreDetails} = props
  const {score, topScore, play} = scoreDetails
  const showScore = play ? (
    <>
      <p className="score">Score: {score}</p>
      <p className="topScore">Top Score: {topScore}</p>
    </>
  ) : (
    ''
  )
  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="navbar-logo"
        />
        <h1 className="nav-heading">Emoji Game</h1>
      </div>

      <div className="nav-text-container">{showScore}</div>
    </nav>
  )
}
export default NavBar
