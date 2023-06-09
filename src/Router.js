import { Route, Switch, Redirect } from "react-router-dom";
import SinglePost from "./pages/SinglePost";
import { AppPosts } from "./pages/AppPosts";
import AddPost from "./pages/AddPost";
import { EditPost } from "./pages/EditPost";


const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/posts" />
        </Route>
        <Route exact path="/posts" component={AppPosts} />
        <Route path="/posts/:id" component={SinglePost} />
        <Route path="/add" component={AddPost} />
        <Route path="/edit/:id" component={EditPost} />
      </Switch>
    </div>
  );
};

export default Router;
