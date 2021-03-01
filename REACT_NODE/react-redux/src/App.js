//import react
import React from 'react';

//import CSS file
import './App.css';

//import routing
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//import containers
import AddUser from './containers/AddUser';
import UserList from './containers/UserList';
import TableComponent from './components/TableComponent'

//function having containers
function App() {
  return (
    <Router>
      <Link to="/list">List</Link>
      <Switch>
        <Route path="/" exact component={ AddUser } />
        <Route path="/list" component= { UserList } />
        <Route path="/table" component= { TableComponent } />
      </Switch>
    </Router>
  );
}
export default App;