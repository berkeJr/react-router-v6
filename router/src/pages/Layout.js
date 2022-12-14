// import React  from "react";   // With the new transform, you can use JSX without importing React.

import { Outlet, Link } from "react-router-dom";

// Function component
const Layout = () => {
  return (
    <div>
      <h1>Layout Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
