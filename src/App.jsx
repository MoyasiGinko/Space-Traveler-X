import { BrowserRouter,Routes, Route, NavLink } from 'react-router-dom'
import Rockets from './components/rockets'
import Missions from './components/missions'
import MyProfile from './components/myProfile'

function App() {

  return (
  <BrowserRouter>
  
  <header>
    <nav className= "navBar">
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="/Missions">Missions</NavLink>
      <NavLink to="/MyProfile">My MyProfile</NavLink>
    </nav>
  </header>
    
    <Routes>
      <Route path='/' element={<Rockets />} />
      <Route path='/Missions' element={<Missions />} />
      <Route path='/MyProfile' element={<MyProfile />} />
    </Routes>
     
    </BrowserRouter>
    
  )
}

export default App
