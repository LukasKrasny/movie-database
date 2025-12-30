import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PopularMovies from "./pages/PopularMovies";
import SharedLayout from "./pages/SharedLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Navigate to="/popular" replace />} />
          <Route path="popular" element={<PopularMovies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
