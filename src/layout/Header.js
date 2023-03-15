import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>     
      <nav className="navbar navbar-light bg-light">
          <Link className="navbar-brand" to="/posts">Posts</Link>
          <Link className="navbar-brand" to="/add">Add</Link>
       </nav>
    </div>
  );
};




