import React from 'react'

function ClassEntity() {
  return (
    <React.Fragment>
      <div className="separator" />
      <div className="class-entity">
        <div className="class-entity__content">
          <div>TurmaX</div>
          <div>10 alunos</div>
        </div>
        <div className="class-entity__holder">
          <button>Alunos</button>
          <button>Editar</button>
          <button>Excluir</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ClassEntity;