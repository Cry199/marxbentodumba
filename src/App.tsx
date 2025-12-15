import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './features/home/pages/HomePage';
import PortfolioPage from './features/portfolio/pages/PortfolioPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App