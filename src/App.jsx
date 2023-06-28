import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Rockets from './components/rockets';
import Missions from './components/missions';
import Dragons from './components/Dragons';
import MyProfile from './components/myProfile';
import './styles/App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRockets } from './redux/features/Rockets/rocketSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavBar />
      <div className="devider"></div>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/Dragons" element={<Dragons />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
