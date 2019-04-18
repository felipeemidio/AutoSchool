import React from 'react'
import NewStudent from './NewStudent';
import StudentsList from './StudentsList';
import StudentsServices from '../../services/StudentsServices';
import uuid from 'uuid/v1';

const KEY_STORAGE = 'students';

class StudentsPage extends React.Component {
  state = {
    students: [],
  }

  handleEdit = (id, text) => {
    this.setState(prevState => {
      const newStudents = prevState.students.slice();
      const index = newStudents.findIndex(student => student.id === id);
      newStudents[index].name = text;
      StudentsServices.save(KEY_STORAGE, newStudents);
      console.log(newStudents);
      return {
        students: newStudents
      };
    });
  };

  handleDelete = id => {
    this.setState(prevState => {
      const newStudents = prevState.students.slice();
      const index = newStudents.findIndex(student => student.id === id);
      newStudents.splice(index, 1);
      StudentsServices.save(KEY_STORAGE, newStudents);
      return {
        students: newStudents
      };
    });
  }

  componentDidMount() {
    StudentsServices.load(KEY_STORAGE).then(students => this.setState({students}));
  }

  render() {
    const { students } = this.state;
    return(
      <React.Fragment>
        <h1>Alunos</h1>
        <div className="separator" />
        <NewStudent onAdd={text => {
          if(!text){
            return null;
          }
          this.setState(prevState => {
            const newStudentsList = prevState.students.concat({
              id: uuid(), 
              name: text,
            })
            StudentsServices.save(KEY_STORAGE, newStudentsList);
            return {students: newStudentsList}
          })
        }} />
        <StudentsList 
          students={students} 
          onEdit={this.handleEdit} 
          onDelete={this.handleDelete}
        />
      </React.Fragment>
    );
  }
}

export default StudentsPage;