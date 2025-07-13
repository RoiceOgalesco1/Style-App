import { Routes, Route, Navigate } from 'react-router-dom';
import AuthForm from './components/auth/AuthForm';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<AuthForm type="login" />} />
      <Route path="/register" element={<AuthForm type="register" />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
};

export default App;