import { Routes, Route } from "react-router-dom";

import { HomePage } from "../components/pages/homePage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
    </Routes>
  );
};
