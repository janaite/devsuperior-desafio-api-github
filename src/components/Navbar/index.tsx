import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/"><h1>GithubAPI</h1></Link>
    </div>
  );
};

export default Navbar;
