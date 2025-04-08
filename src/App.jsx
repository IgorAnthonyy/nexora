import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/planos" element={<h1>Planos</h1>} />
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
