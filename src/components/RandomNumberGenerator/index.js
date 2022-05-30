import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  handleClick = () => {
    const min = 0
    const max = 100
    const randomNumber = min + Math.random() * (max - min)
    this.setState({randomNumber})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="bg-primary"
            onClick={this.handleClick}
          >
            Generate
          </button>
          <p className="heading">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
