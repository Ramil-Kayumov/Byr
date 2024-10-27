import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../config/routes";

const Main = () => {
  return (
    <Routes>
      {publicRoutes.map((el, i) => (
        <Route path={el.path} Component={el.component} key={i} />
      ))}
    </Routes>
  );
};

export default Main;
