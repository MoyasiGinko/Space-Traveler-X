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
        <NavLink to="/" activeClassName="active">
          Rockets
        </NavLink>
        <NavLink to="/Missions" activeClassName="active">
          Missions
        </NavLink>
        <NavLink to="/Dragons" activeClassName="active">
          Dragons
        </NavLink>
        <div className="line"></div>
        <NavLink to="/MyProfile" activeClassName="active">
          MyProfile
        </NavLink>
      </nav>
    </header>
  );
}

export default NavBar
