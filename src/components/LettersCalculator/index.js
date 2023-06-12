// Write your code here.
import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {charCount: ''}

  countingChars = event => {
    this.setState({charCount: event.target.value})
  }

  render() {
    const {charCount} = this.state

    return (
      <div className="bgContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="clockImage"
        />
        <div className="bottomContainer">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="inputContainer">
            <label htmlFor="input" className="label">
              Enter the phrase
            </label>
            <br />
            <input
              type="search"
              placeholder="Enter the phrase"
              className="inputElement"
              id="input"
              onChange={this.countingChars}
            />
          </div>
          <div className="cardContainer">
            <p className="noOfLetters">No.of letters:{charCount.length}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
