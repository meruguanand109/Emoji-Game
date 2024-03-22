// Write your code here.
import './index.css'

const WinOrLossCard = props => {
  const {score} = props
  const {onPlayAgain} = props
  const onClickPlayAgain = () => {
    onPlayAgain()
  }
  const resultStatus = score === 12 ? 'You Won' : 'You Lose'
  const resultScore = score === 12 ? 'Best Score' : 'Score'
  const imgUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  return (
    <div className="result-container">
      <img src={imgUrl} className="result-img" alt="win or lose" />
      <div className="result-card">
        <h1 className="result-h">{resultStatus}</h1>
        <p className="result-p">{resultScore}</p>
        <p className="re-score">{score}/12</p>
        <button onClick={onClickPlayAgain} className="play-btn">
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLossCard
