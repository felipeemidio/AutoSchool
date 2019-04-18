import React from 'react'

class NewClasses extends React.Component {
  state = {
    text: ''
  }
  render() {
    const { text } = this.state;
    const { open, onCancel, onAdd } = this.props;
    return (
      <React.Fragment>
        {open && (
          <div className="new-classes">
            <div className="input-student">
              <input
                type="text"
                placeholder="Nome da Turma..."
                value={text}
                onChange={event => this.setState({
                  text: event.target.value
                })}
              />
            </div>
            <button onClick={onCancel}>Cancelar</button>
            <button onClick={onAdd}>Adicionar</button>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default NewClasses;