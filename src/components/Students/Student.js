import React from 'react'

class Student extends React.Component{
  state = {
    isEditing: false,
  }

  handleEditStudent = (isEditing, id, onEdit) => {
    if(isEditing){
      onEdit(id, this.input.value);
    }
    this.setState(prevState => (
      {isEditing: !prevState.isEditing}
    ))
  }
  
  render(){
    const { name, id, onEdit, onDelete } = this.props;
    const { isEditing } = this.state;
    return(
      <div className="row">
        <div className="separator" />
        <div className="row__info">
          {isEditing ? (
            <input 
              type="text" defaultValue={name} 
              ref={ c => this.input = c}
            />
          ) : (
            <div className="row__info__name">{name}</div>
          )}
          <button 
            onClick={() => this.handleEditStudent(isEditing, id, onEdit)} 
          >
            {isEditing ? "Salvar" : "Editar"}
          </button>
          <button onClick={() => onDelete(id)}>Excluir</button>
        </div>
      </div>
    );
  }
}

export default Student;