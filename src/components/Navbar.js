import React from "react";
import { useSelector } from "react-redux";
const Navbar = () => {
  const No = useSelector((state) => state.count);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Todos
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto"></ul>
        <button
          disabled
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
        >
          Remaining Todos : {No}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
