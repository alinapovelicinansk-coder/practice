import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <div className="about-page">
      <h1>About me</h1>
      
      <div className="about-content">
        <img src="../public/images/designer-photo.jpg" alt="Leila" className="about-photo" />
        
        <div className="about-text">
          <h2>Hello!</h2>
          <p>
            Welcome to Designer's Diary—a unique blog about my life, 
            not only as a popular designer, but also as an ordinary person. 
            Founded in 2019, this blog shares my everyday and professional moments: 
            travel, lifestyle, music, fashion, and, of course, the most important moment—
            designing your clothes. I hope you, the reader, find these posts helpful, 
            inspiring, educational, or even a little entertaining. Enjoy!
          </p>
          <p className="signature">Leila Blue, 22 year</p>
        </div>
      </div>

      <Link to="/" className="back-button">Back to home page</Link>
    </div>
  )
}

export default AboutPage