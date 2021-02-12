import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../utils/routes";

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link to={ROUTES.HOME}>namesdaySEARCHER</Link>
        <Link to={ROUTES.HOME}>Home</Link>
        <Link to={ROUTES.SAVED}>Saved</Link>
      </div>
    </nav>
  );
}
