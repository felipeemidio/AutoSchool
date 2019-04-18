import React from 'react'

class Input extends React.Component {
  state = {
    text: "",
  }
  
  render() {
    const { onAdd, label } = this.props;
    const { text } = this.state;
    return (
      <div className='new-student'>
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
        <button 
          className="input-button" 
          onClick={() => {
            onAdd(text);
            this.setState({text: ''});
          }}
        >
          {label}
        </button>

      </div>
    );
  }
}

export default Input;