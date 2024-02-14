// npm modules
import { NavLink } from 'react-router-dom'

// assets
import styles from "./NavBar.module.css";

// css


const NavBar = ({ user, handleLogout }) => {

  const publicLinks = (
    <div className={styles.profileLink}>
      <NavLink className={styles.profileLink} to="/">home</NavLink>
      <NavLink className={styles.profileLink} to="/bookSearch">Library</NavLink>

      </div>
  )

  const protectedLinks = (
    <ul>
      <li>
        <NavLink to="/auth/logout" onClick={handleLogout}>LOG OUT</NavLink>

        {/* Remove this this below  */}
        <NavLink to="/myProfile">My Profile</NavLink>
        {/* Remove this link above */}
      </li>
    </ul>
  )

  return (
    <nav className={styles.container}>
      <NavLink to="/auth/login">Logout</NavLink>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar
