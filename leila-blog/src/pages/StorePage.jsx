import { Link } from 'react-router-dom'

function StorePage() {
  return (
    <div className="store-page">
      <h1>My store</h1>
      <p>Leila Blue - unique clothing designs.</p>
      <Link to="/" className="back-button">Back to home page</Link>
    </div>
  )
}

export default StorePage