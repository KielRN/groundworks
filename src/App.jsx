import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InstantQuotePage from './pages/InstantQuotePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/instant-quote" element={<InstantQuotePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
