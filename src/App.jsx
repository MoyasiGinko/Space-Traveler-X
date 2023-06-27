import { BrowserRouter,Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Rockets from './components/rockets'
import Missions from './components/missions'
import MyProfile from './components/myProfile'


function App() {

  return (
  <BrowserRouter>
  
  <NavBar />
    <div className="devider"></div>
    <Routes>
      <Route path='/' element={<Rockets />} />
      <Route path='/Missions' element={<Missions />} />
      <Route path='/MyProfile' element={<MyProfile />} />
    </Routes>
     
    </BrowserRouter>
    
  )
}

export default App
