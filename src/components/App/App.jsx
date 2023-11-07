import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import AboutPage from '../AboutPage/AboutPage.jsx';

import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <header className="App-header">
            <h1 className="App-title">GitHub Student List</h1>
            </header>
        <Router>

            <nav>
                <button><Link to="/About">About Page</Link></button>
                <button><Link to="/">Home</Link></button>
                <button><Link to="/allStudents">All Students</Link></button>
            </nav>

            <Route exact path='/'>
                <StudentForm />
            </Route>

            <Route exact path="/About">
                <AboutPage />
            </Route>

            <Route exact path='/allStudents'>
                <p>Student list:</p>
                <StudentList />
            </Route>

        </Router>
        
        </div>
    );
}

export default App;
