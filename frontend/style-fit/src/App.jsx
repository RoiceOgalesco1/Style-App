import { Routes, Route, Navigate } from 'react-router-dom';
import AuthForm from './components/auth/AuthForm';
import UploadsPage from './pages/UploadsPage';
import GalleryPage from './pages/GalleryPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<AuthForm type="login" />} />
      <Route path="/register" element={<AuthForm type="register" />} />
      <Route path="/uploads" element={<UploadsPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  );
};

export default App;