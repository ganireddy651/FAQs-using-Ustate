import {useState} from 'react'
import './index.css'

const FaqItem = props => {
  const {eachList} = props
  const {questionText, answerText} = eachList
  const [isExpanded, setIsExpanded] = useState(false)
  console.log(isExpanded)

  const toggleAnswer = () => {
    setIsExpanded(!isExpanded)
  }

  const btnUrl = isExpanded
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const altText = isExpanded ? 'minus' : 'plus'

  return (
    <li>
      <div className="list-items-container">
        <div>
          <h1 className="list-heading">{questionText}</h1>
          {isExpanded && <p>{answerText}</p>}
        </div>
        <button onClick={toggleAnswer} className="plus-btn" type="button">
          <img src={btnUrl} alt={altText} />
        </button>
      </div>
    </li>
  )
}

export default FaqItem
