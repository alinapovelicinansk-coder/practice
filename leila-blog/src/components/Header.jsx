import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Leila Designer's Diary
        </Link>
        <nav className="nav">
          <Link to="/design" className="nav-link">Life in design</Link>
          <Link to="/travel" className="nav-link">Travel</Link>
          <Link to="/store" className="nav-link">My store</Link>
          <Link to="/about" className="nav-link">About me</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header