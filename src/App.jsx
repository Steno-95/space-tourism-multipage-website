import { Route, Routes } from "react-router";
import AppLayout from "./AppLayout";
import Home from "./pages/home/Home";
import Destination from "./pages/destination/Destination";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route
          path="crew"
          element={<div className="crew-bg site-padding"></div>}
        />
        <Route path="destination" element={<Destination />} />
        <Route
          path="technology"
          element={<div className="tech-bg site-padding"></div>}
        />
      </Route>
    </Routes>
  );
}

export default App;
