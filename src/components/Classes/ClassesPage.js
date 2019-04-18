import React from 'react'
import NewClasses from './newClasses';
import Input from '../Generics/Input';
import StudentsServices from '../../services/StudentsServices';

const KEY_STORAGE="classes";

class ClassesPage extends React.Component {
  
  state = {
    classes: []
  };

  componentDidMount() {
    StudentsServices.load(KEY_STORAGE).then(classes => this.setState({classes}));
  }

  render() {
    return(
      <React.Fragment>
        <h1>Aulas Práticas</h1>
        <div className="add-scope">
          <div className="separator" />
          <button>
            <i className="material-icons">add</i>
          </button>
        </div>
        <NewClasses />
      </React.Fragment>
    );
  }
}

export default ClassesPage;