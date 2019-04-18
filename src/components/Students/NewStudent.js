import React from 'react'

class NewStudent extends React.Component {
  state = {
    text: "",
  }
  
  render() {
    const { onAdd } = this.props;
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
          Incluir Aluno
        </button>

      </div>
    );
  }
}

export default NewStudent;