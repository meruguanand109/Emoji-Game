import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    ClickedEmojisList: [],
    play: true,
  }

  AddToClickedEmoji = id => {
    const {ClickedEmojisList, score} = this.state
    const isAlreadyClicked = ClickedEmojisList.includes(id)
    if (isAlreadyClicked === true) {
      this.setState({play: false, ClickedEmojisList: []})
    } else if (ClickedEmojisList.length === 11) {
      this.setState({play: false, ClickedEmojisList: [], score: score + 1})
    } else {
      this.setState({
        ClickedEmojisList: [...ClickedEmojisList, id],
        score: score + 1,
      })
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onPlayAgain = () => {
    const {score, topScore} = this.state
    if (score >= topScore) {
      this.setState({play: true, score: 0, topScore: score})
    } else {
      this.setState({play: true, score: 0})
    }
  }

  renderGame = emojiList => {
    const {play, score} = this.state
    return play ? (
      emojiList.map(eachEmoji => (
        <EmojiCard
          emojiDetails={eachEmoji}
          key={eachEmoji.id}
          AddToClickedEmoji={this.AddToClickedEmoji}
          scoreDetails={this.state}
        />
      ))
    ) : (
      <WinOrLoseCard score={score} onPlayAgain={this.onPlayAgain} />
    )
  }

  render() {
    const emojiList = this.shuffledEmojisList()
    return (
      <div className="emoji-game-container">
        <NavBar scoreDetails={this.state} />
        <ul className="game-container">{this.renderGame(emojiList)}</ul>
      </div>
    )
  }
}

export default EmojiGame
