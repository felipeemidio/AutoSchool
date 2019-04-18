import React from 'react'
import Student from './Student';

class StudentsList extends React.Component {
  
  render() {
    const { students, onEdit, onDelete } = this.props;

    return (
      <React.Fragment>
        {students.map((student) =>(
          <Student 
            key={student.id} 
            id={student.id} 
            name={student.name}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </React.Fragment>
    );
  }


}
export default StudentsList;