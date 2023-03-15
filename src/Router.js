import { Route, Switch, Redirect } from "react-router-dom";

import { Posts } from "./pages/Posts";

const Router = () => {
  return (
    <div>
      <Switch>
      <Route exact path="/">
            <Redirect to="/posts" />
        </Route>
        <Route path="/posts" component={Posts} />
      </Switch>
    </div>
  );
};

export default Router;
