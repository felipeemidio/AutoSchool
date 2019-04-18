import React from 'react'
import classnames from 'classnames';
import { withRouter } from "react-router-dom";

function NavigationDrawer({open, onClose, history}) {
  return (
    <div className={classnames("drawer", { "drawer--open": open })}>
      <div className="drawer__top">
        <button onClick={onClose}>
          <i className="material-icons">close</i>
        </button>
      </div>
      <div className="drawer__list">
        <button 
          className="drawer__list__item" 
          onClick={() => {
            onClose();
            history.push('/');
          }}
        >
          <i className="material-icons">home</i> Página Inicial
        </button>
        <button 
          className="drawer__list__item" 
          onClick={() => {
            onClose();
            history.push('/aulas');
          }}
        >
          <i className="material-icons">school</i> Aulas Práticas
        </button>
        <button 
          className="drawer__list__item" 
          onClick={() => {
            onClose();
            history.push('/alunos');
          }}
        >
          <i className="material-icons">group</i> Alunos
        </button>
      </div>

    </div>
  );
}

export default withRouter(NavigationDrawer);