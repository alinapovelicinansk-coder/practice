import SectionCard from '../components/SectionCard'

function HomePage() {
  return (
    <div className="home-page">
      <div className="grid-container">
        <SectionCard 
          title="Life in design"
          image="../public/images/design.jpg"
          link="/design"
        />
        <SectionCard 
          title="Travel"
          image="../public/images/travel.jpg"
          link="/travel"
        />
        <SectionCard 
          title="My store"
          image="../public/images/store.jpg"
          link="/store"
        />
        <SectionCard 
          title="About me"
          image="../public/images/about.jpg"
          link="/about"
        />
      </div>
    </div>
  )
}

export default HomePage