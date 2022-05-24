import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ChatRoom from "./component/ChatRoom/ChatRoom";
import AuthProvider from "./component/context/AuthProvider";
import Login from "./component/Login/Login";
export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path={"/"} component={Login} />
          <Route exact path={"/chat"} component={ChatRoom} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}
