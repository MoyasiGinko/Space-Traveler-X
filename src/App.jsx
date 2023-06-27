import { BrowserRouter, Routes, Route, NavLink} from 'react-router'
import Rockets from './components/rockets'
import Missions from './components/missions'

function App() {

  return (
  <>
  
  <header>
    <nav className= "navBar">
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="/Missions">Missions</NavLink>
    </nav>
  </header>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={Rockets} />
      <Route path='/Missions' element={Missions} />
    </Routes>
    </BrowserRouter> 
    </>
    
  )
}

export default App
