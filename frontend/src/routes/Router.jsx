import { Routes, Route } from "react-router-dom";

// Pages
import Accueil from "../pages/Accueil.jsx";
import Contact from "../pages/Contact.jsx";
import Calendrier from "../pages/Calendrier.jsx";
import Parcours from "../pages/Parcours.jsx";
import Projets from "../pages/Projets.jsx";

const AppRouter = () => {
  return (
    < Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/calendrier" element={<Calendrier />} />
      <Route path="/parcours" element={<Parcours />} />
      <Route path="/projets" element={<Projets />} />
    </Routes>
  );
}

export default AppRouter;