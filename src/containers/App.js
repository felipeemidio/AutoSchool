import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Appbar from '../components/Appbar';
import NavigationDrawer from '../components/NavigationDrawer';
import HomePage from "../components/HomePage";
import ClassesPage from "../components/Classes/ClassesPage";
import StudentsPage from "../components/Students/StudentsPage";

class App extends React.Component {
  state = { 
    isDrawerOpen: false,
  };

  setIsDrawerOpen(boolValue) {
    this.setState({ isDrawerOpen: boolValue });
  }
  
  render() {
    const {isDrawerOpen} = this.state;
    return (
      <Router>
      <React.Fragment>
        <Appbar openDrawer={() => this.setIsDrawerOpen(true)}/>
        <div className="container">
          <Route path='/' exact component={HomePage} />
          <Route path='/aulas' exact component={ClassesPage} />
          <Route path='/alunos' exact component={StudentsPage} />
        </div>
        <NavigationDrawer open={isDrawerOpen} onClose={() => this.setIsDrawerOpen(false)} />
      </React.Fragment>
      </Router>
    );
  }
  
}

export default App;
