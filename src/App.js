import React from "react";
import './App.css';
import Auth from './Components/Auth/Auth'
import { AuthProvider } from './Contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./Helpers/ProtectedRoute";
import ToDo from './Components/ToDo/ToDo'

const App = () => {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
          <ProtectedRoute exact path="/" component={ToDo} />
            <Route path="/login" component={Auth} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
