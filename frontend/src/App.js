import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ShowRating from "./pages/ShowRating";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rating/:id" element={<ShowRating />} />
      </Routes>
    </Router>
  );
}

export default App;
