import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Layout from "../components/shared/Layout/Layout";
import Boards from "../screens/Boards/Boards";

export default function MainContainer(props) {
  const { currentUser } = props;
  return (
    <div>
      <Layout currentUser={currentUser}>
        <Switch>
          <Route path="/boards">
            <Boards />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}
