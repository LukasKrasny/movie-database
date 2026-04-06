import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PopularMovies from "./pages/PopularMovies";
import SharedLayout from "./pages/SharedLayout";
import MovieDetail from "./pages/MovieDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Navigate to="/popular" replace />} />
          <Route path="popular" element={<PopularMovies />} />
          <Route path="movie/:id" element={<MovieDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
