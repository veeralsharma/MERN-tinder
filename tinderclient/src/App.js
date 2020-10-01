import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import TinderCards from "./components/TinderCard";
import SwipeButtons from "./components/SwipeButtons";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";
import Login from "./components/Login";
import Register from "./components/Register"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    localStorage.removeItem("usertoken");
  }, []);

  return (
    <div className="App">
      <Router>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          {!localStorage.usertoken ? (
            <>
              <Header />
              <TinderCards />
              <SwipeButtons />
            </>
          ) : (
            <Login />
          )}
        </Route>
        <Route exact path="/chat">
          <Header backButton="/" />
          <Chats />
        </Route>
        <Route exact path="/chat/:person">
          <Header backButton="/chat" />
          <ChatScreen />
        </Route>
      </Router>
    </div>
  );
}

export default App;
