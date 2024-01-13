import { Routes, Route } from "react-router-dom";
import LayoutWrapper from "../components/layout-wrapper/Layout-wrapper";
import Home from "../pages/home/Home";



const AppRouter = () => {
  return (
    <Routes>
      <Route element={<LayoutWrapper />}>
      <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};
export default AppRouter;