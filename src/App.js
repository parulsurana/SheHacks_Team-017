import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import AddNote from "./Components/AddNote/AddNote";
import Login from "../src/Components/Login/Login";
import Main from "../src/Components/Main/Main";
import Profile from "../src/Components/Profile/Profile";
import { toast, ToastContainer } from "react-toastify";
import GamePage from "./GamePage";
import SearchWord from "./Pages/Dictionary/SearchWord";
import DailyNews from "./Pages/News/DailyNews";
import About from "./Pages/About/About";
import Sudoku from './Sudoku';


function App() {
  const showToast = (type, message) => {
    // 0 = warning, 1 = success
    switch (type) {
      case 0:
        toast.warning(message);
        break;
      case 1:
        toast.success(message);
        break;
      default:
        break;
    }

  }
  let getRandomPuzzle = () => {
    return "...26.7.168..7..9.19...45..82.1...4...46.29...5...3.28..93...74.4..5..367.3.18...";
}

  return (
    <div className="App">
      <Router>
        <ToastContainer
          autoClose={2000}
          hideProgressBar={true}
          position={toast.POSITION.BOTTOM_RIGHT}
        />
        <Switch>
          <Route path="/sudoku">
          <Sudoku puzzle={getRandomPuzzle()}/>
          </Route>
          <Route
            exact
            path="/"
            render={(props) => <Login showToast={showToast} {...props} />}
          />
          <Route
            exact
            path="/chat"
            render={(props) => <Main showToast={showToast} {...props} />}
          />
          <Route
            exact
            path="/profile"
            render={(props) => <Profile showToast={showToast} {...props} />}
          />
          <Route path="/notes">
            <AddNote />
          </Route>
          <Route path="/notes">
            <AddNote />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/games">
            <GamePage />
          </Route>
          <Route path="/dictionary">
            <SearchWord />
          </Route>
          <Route path="/news">
            <DailyNews />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
