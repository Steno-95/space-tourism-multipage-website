import { Route, Routes } from "react-router";
import AppLayout from "./AppLayout";
import Home from "./pages/home/Home";
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="crew" element={<Crew />} />
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
