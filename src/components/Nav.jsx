import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="flex fixed top-0 w-full z-50">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
