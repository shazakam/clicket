import React from "react";
import { Route, Routes} from "react-router-dom";
import LoginForm from "./components/LoginForm";
//import Home from "./containers/Home";

export default function links() {
  return (
    <Routes>
      <Route path="/chats">
          <LoginForm />
      </Route>

    </Routes>
  );
}