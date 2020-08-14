import React, {useState} from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Leaderboard from "./containers/Leaderboard/Leaderboard";
import Login from "./containers/Login/Login";
import Quiz from "./containers/Quiz/Quiz";
import SelectQuiz from "./containers/SelectQuiz/SelectQuiz";
import Signup from "./containers/Signup/Signup";
import UpdateUser from "./containers/UpdateUser/UpdateUser";
import User from "./containers/User/User";
import NoMatch from "./containers/NoMatch/NoMatch";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { UserProvider } from "./util/UserContext";
import API from "./util/API";

import "./App.css";
function App() {

  const [user, setUser] = useState({})
 
  return (
    <div id="body">
      <Router>

        <UserProvider value={{user, setUser}}>

          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/leaderboard" component={Leaderboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/quiz" component={Quiz} />
            <Route path="/quiz/:id" component={Quiz} />
            <Route exact path="/selectquiz" component={SelectQuiz} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/updateuser" component={UpdateUser} />
            <Route exact path="/user" component={User} />
            <Route component={NoMatch} />
          </Switch>
        </UserProvider>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
