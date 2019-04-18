import React from 'react'

class NewClasses extends React.Component {
  state = {
    text: ''
  }
  render() {
    const { text } = this.state;
    const { open } = this.props;
    return(
      <div className="input-student">
        <input
          type="text"
          placeholder="Novo aluno..."
          value={text}
          onChange={event => this.setState({ 
            text: event.target.value
          })}
        />
      </div>
    );
  }
}

export default NewClasses;