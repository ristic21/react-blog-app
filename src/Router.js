import { Route, Switch, Redirect } from "react-router-dom";

import { AppPosts } from "./pages/AppPosts";

const Router = () => {
  return (
    <div>
      <Switch>
      <Route exact path="/">
            <Redirect to="/posts" />
        </Route>
        <Route path="/posts" component={AppPosts} />
      </Switch>
    </div>
  );
};

export default Router;
