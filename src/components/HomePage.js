import React from "react";
import { withRouter } from "react-router-dom";

function HomePage({history}) {
  return (
    <div>
      <h1>Serviços</h1>
      <div className="separator" />
      <button className="homeButton" onClick={()=>history.push('/aulas')}>
        <i className="material-icons">school</i>
        <p>Aula Teórica</p>
      </button>
      <h1>Cadastros</h1>
      <div className="separator" />
      <button className="homeButton" onClick={()=>history.push('/alunos')}>
        <i className="material-icons">group</i>
        <p>Alunos</p>
      </button>
    </div>
  );
}

export default withRouter(HomePage);
