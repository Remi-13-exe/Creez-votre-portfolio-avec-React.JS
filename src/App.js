import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Importation de BrowserRouter, Routes et Route depuis react-router-dom pour la gestion des routes dans l'application

import Home from "./pages/Home"; // Composant de la page d'accueil
import Services from "./pages/Services"; // Composant de la page des services
import Portfolio from "./pages/Portfolio"; // Composant de la page portfolio
import Legal from "./pages/Legal"; // Composant de la page mentions légales
import Contact from "./pages/Contact"; // Composant de la page de contact

function App() {
  return (
    <Router> {/* Router englobe les routes pour activer la navigation */}
      <Routes>
        {/* Liste des routes définies pour l'application */}
        <Route path="/" element={<Home />} /> 
        {/* Route de la page d'accueil : http://votre-site.com/ */}
        
        <Route path="/services" element={<Services />} /> 
        {/* Route pour afficher les services : http://votre-site.com/services */}
        
        <Route path="*" element={<div>404 - Page introuvable</div>} /> 
        {/* Route par défaut pour les chemins non correspondants (page 404) */}
        
        <Route path="/portfolio" element={<Portfolio />} /> 
        {/* Route pour le portfolio : http://votre-site.com/portfolio */}
        
        <Route path="/legal" element={<Legal />} /> 
        {/* Route pour les mentions légales : http://votre-site.com/legal */}
        
        <Route path="/contact" element={<Contact />} /> 
        {/* Route pour la page contact : http://votre-site.com/contact */}
      </Routes>
    </Router>
  );
}

export default App; // Exportation du composant App comme composant principal de l'application
