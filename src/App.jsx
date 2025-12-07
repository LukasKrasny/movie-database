import { BrowserRouter, Routes, Route } from "react-router-dom"
import PopularMovies from "./pages/PopularMovies"

const App = () => {
  return (
    <div className="bg-black-wash min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/popular" element={<PopularMovies/>}/>
        </Routes>
      </BrowserRouter>
    </div>   
  )
}
export default App