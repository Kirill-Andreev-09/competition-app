import { Route, Navigate, Routes, BrowserRouter } from 'react-router-dom';
import { Notes, Friends, Home } from '../pages';

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};
