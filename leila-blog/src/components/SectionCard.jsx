import { Link } from 'react-router-dom'

function SectionCard({ title, image, link, star }) {
  return (
    <Link to={link} className="section-card">
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
        {star && <span className="star-decoration">⭐</span>}
      </div>
      <h2 className="card-title">{title}</h2>
    </Link>
  )
}

export default SectionCard