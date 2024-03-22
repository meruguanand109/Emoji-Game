// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, AddToClickedEmoji, scoreDetails} = props
  const {id, emojiUrl, emojiName} = emojiDetails
  const onClickEmoji = () => {
    AddToClickedEmoji(id)
  }
  return (
    <li className="emoji-card-container">
      <button className="emoji-btn">
        <img
          src={emojiUrl}
          alt={emojiName}
          onClick={onClickEmoji}
          className="emoji"
        />
      </button>
    </li>
  )
}

export default EmojiCard
