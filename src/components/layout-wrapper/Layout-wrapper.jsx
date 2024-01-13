import { Link, Outlet } from "react-router-dom";
import "./Layout-wrapper.css";

const LayoutWrapper = () => {
  return (
    <div>
      <div>
        <nav className="header">
          <h1>Firebase Project</h1>
        </nav>
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutWrapper;
