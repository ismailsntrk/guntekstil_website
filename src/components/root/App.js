import "./App.css";
import Navi from "../navi/Navi";
import Dashboard from "../dashboard/Dashboard";
import Footer from "../footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "../aboutPage/AboutPage";
import Contact from "../contact/Contact";
import NoPage from "../noPage/NoPage";
import Yarn from "../yarn/Yarn";
import Production from "../production/Production";
import Media from "../media/Media";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navi></Navi>
        <Routes>
          <Route exact path="/" element={<Dashboard />}> </Route>
            <Route path="/aboutus" element={<AboutPage />} />
            <Route path="/yarn" element={<Yarn />} />
            <Route path="/production" element={<Production />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
         
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
