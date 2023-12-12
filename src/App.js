import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home";
// import About from "./Page/About";
import NotFound from "./Page/NotFound";
import Movies from "./Page/Movies";
import Contact from "./Page/Contact";
import Login from "./Page/Login";
import WatchMovie from "./Page/WatchMovie";
import SearchComponent from "./Component/SearchComponent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="*" element={<NotFound />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/watch-movie/:movieId" element={<WatchMovie />} />
      <Route path="/search" element={<SearchComponent />} /> 
    </Routes>
  );
}

export default App;
