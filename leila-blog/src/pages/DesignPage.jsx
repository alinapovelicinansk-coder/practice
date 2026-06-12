import { Link } from 'react-router-dom'

function DesignPage() {
  return (
    <div className="design-page">
      <div className="page-header">
        <h1>Life in design</h1>
      </div>
      
      <div className="content-section">
        <div className="text-image-row">
          <img src="../public/images/workshop1.jpg" alt="Workshop" className="content-image" />
          <div className="text-content">
            <p>
              I want to share with you the atmosphere of the workshop, 
              where we create new clothing designs for beauties and handsome men.
            </p>
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="text-image-row reverse">
          <div className="text-content">
            <p>
              I also recently attended Paris Fashion Week. 
              There were new collections from popular brands like Chanel, 
              Louis Vuitton, Balenciaga, and many others.
            </p>
          </div>
          <img src="../public/images/fashion-week.jpg" alt="Fashion Week" className="content-image" />
        </div>
      </div>

      <Link to="/" className="back-button">Back to home page</Link>
    </div>
  )
}

export default DesignPage