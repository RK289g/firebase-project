import { Outlet } from "react-router-dom";
import "./Layout-wrapper.css";

const LayoutWrapper = () => {
  return (
    <div>
      <div>
        <nav className="header">
          <h1>Firebase Project</h1>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutWrapper;
