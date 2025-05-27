import { Routes, Route } from "react-router-dom";

// Pages
import Accueil from "../pages/Accueil.jsx";
import Contact from "../pages/Contact.jsx";
import Curriculum from "../pages/Curriculum.jsx";
import Parcours from "../pages/Parcours.jsx";
import Projets from "../pages/Projets.jsx";

const AppRouter = () => {
  return (
    < Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/parcours" element={<Parcours />} />
      <Route path="/projets" element={<Projets />} />
    </Routes>
  );
}

export default AppRouter;