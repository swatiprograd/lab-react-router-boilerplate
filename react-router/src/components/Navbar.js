import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Kalvium ❤️
      </Link>
      <ul>
        <Link to="/contacts">Contacts</Link>
        <Link to="/about">About</Link>
      </ul>
    </nav>
  )
}