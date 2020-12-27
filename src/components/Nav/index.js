import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <a className="navbar-brand" href="/">
        Google Book Search
      </a>
      <a className="nav-link text-dark" href="/saved">
        Saved Books
      </a>
    </nav>
  );
}

export default Nav;