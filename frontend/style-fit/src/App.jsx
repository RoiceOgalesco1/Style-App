import { Routes, Route, Navigate } from 'react-router-dom';
import AuthForm from './components/auth/AuthForm';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<AuthForm type="login" />} />
      <Route path="/register" element={<AuthForm type="register" />} />
    </Routes>
  );
};

export default App;