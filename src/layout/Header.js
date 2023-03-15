import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>     
      <nav class="navbar navbar-light bg-light">
          <Link class="navbar-brand" to="/posts">Posts</Link>
       </nav>
    </div>
  );
};




