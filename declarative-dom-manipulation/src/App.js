import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isRed: false
    }
  }

  render() {
    return (<div>
      <p className={this.state.isRed ? 'red' : ''}>
        Here's a paragraph element. When the button is clicked it should turn red!
      </p>
      <button onClick={() => this.setState({ isRed: !this.state.isRed })}>
        {this.state.isRed ? 'Turn black!' : 'Turn red!'}
      </button>

    </div>)
  }
}

export default App;
