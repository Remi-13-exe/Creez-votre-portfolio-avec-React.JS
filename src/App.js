import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Legal from "./pages/Legal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route pour la page d'accueil */}
        <Route path="/services" element={<Services />} /> {/* Route pour les services */}
        <Route path="*" element={<div>404 - Page introuvable</div>} /> {/* Route pour les pages non trouvées */}
        <Route path="/portfolio" element={<Portfolio />} /> {/* Route pour les services */}
        <Route path="/legal" element={<Legal />} /> {/* Route pour les services */}

      </Routes>
    </Router>
  );
}

export default App;
