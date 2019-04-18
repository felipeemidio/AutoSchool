import React from 'react'

function Appbar( {openDrawer} ) {
  return(
    <div className="appbar">
        <div className="appbar__container">
          <button onClick={openDrawer}>
            <i className="material-icons">menu</i>
          </button>
          <h3 className="appbar__title">Auto Escola Senna</h3>
        </div>
      </div>
  );
}

export default Appbar;