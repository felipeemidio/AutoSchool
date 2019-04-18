import React from 'react'
import NewClasses from './newClasses';
import StudentsServices from '../../services/StudentsServices';
import ClassEntity from './ClassEntity'

const KEY_STORAGE = "classes";

class ClassesPage extends React.Component {

  state = {
    classes: [],
    openInput: false,
  };

  setOpenInput(value) {
    this.setState({ openInput: value });
  }

  componentDidMount() {
    StudentsServices.load(KEY_STORAGE).then(classes => this.setState({ classes }));
  }

  render() {
    const { classes, openInput } = this.state;
    return (
      <React.Fragment>
        <h1>Aulas Práticas</h1>
        <div className="add-scope">
          <div className="separator" />
          <button onClick={() => this.setOpenInput(true)}>
            <i className="material-icons">add</i>
          </button>
        </div>
        <NewClasses
          open={openInput}
          onCancel={() => this.setOpenInput(false)}
          onAdd={text => {
            if (!text) {
              return null;
            }
            this.setState(prevState => {
              const newClassesList = prevState.students.concat({
                id: uuid(),
                className: text,
                students: [],
              })
              StudentsServices.save(KEY_STORAGE, newClassesList);
              return { classes: newClassesList }
            })
          }}
        />
        <ClassEntity />
        <ClassEntity />
        <ClassEntity />
        <ClassEntity />
      </React.Fragment>
    );
  }
}

export default ClassesPage;