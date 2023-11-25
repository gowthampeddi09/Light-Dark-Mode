// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {currentMode: true}

  changeMode = () => {
    this.setState(prevState => ({currentMode: !prevState.currentMode}))
  }

  render() {
    const {currentMode} = this.state

    const modeClassName = currentMode ? 'dark-mode' : 'light-mode'
    const headingClassName = currentMode
      ? 'dark-mode-heading'
      : 'light-mode-heading'
    const buttonText = currentMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="light-dark-mode-bg-container">
        <div className={`light-dark-mode-card ${modeClassName}`}>
          <h1 className={headingClassName}>Click to Change Mode</h1>
          <button onClick={this.changeMode}>{buttonText}</button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
