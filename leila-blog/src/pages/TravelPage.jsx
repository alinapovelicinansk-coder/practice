import { Link } from 'react-router-dom'

function TravelPage() {
  return (
    <div className="travel-page">
      <h1>Travel</h1>
      <p>Stories about my journeys and inspiration from around the world.</p>
      <Link to="/" className="back-button">Back to home page</Link>
    </div>
  )
}

export default TravelPage