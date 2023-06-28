import { NavLink } from "react-router-dom"
import planet from '../assets/planet.png'
const NavBar = () => {
  return (
    <header className="header">
      <div className="logoDiv">
        <img src={planet} alt="logo" className="logo" />

        <h1>Space Traveler&apos;s Hub</h1>
      </div>

      <nav className="navBar">
        <NavLink to="/" activeclassname="active">
          Rockets
        </NavLink>
        <NavLink to="/Missions" activeclassname="active">
          Missions
        </NavLink>
        <NavLink to="/Dragons" activeclassname="active">
          Dragons
        </NavLink>
        <div className="line"></div>
        <NavLink to="/MyProfile" activeclassname="active">
          MyProfile
        </NavLink>
      </nav>
    </header>
  );
}

export default NavBar
