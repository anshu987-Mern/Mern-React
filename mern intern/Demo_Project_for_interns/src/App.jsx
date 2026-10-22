import './App.css'

const villagePhotos = {
  lake: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85',
  village: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=900&q=85',
  green: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85',
  landscape: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=2000&q=90',
}

const highlights = [
  'Walk through the village lanes',
  'Meet our local families',
  'Taste food made with love',
]

function App() {
  return (
    <main>
      <section className="about-hero" aria-labelledby="page-title">
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">A slower kind of getaway</p>
          <h1 id="page-title">About Us</h1>
          <p className="hero-intro">
            A little place with a lot of heart, tucked away in the hills.
          </p>
        </div>
      </section>

      <section className="story-section" id="our-story">
        <div className="story-grid">
          <div className="story-copy">
            <p className="eyebrow">A warm welcome</p>
            <h2>A Paradise<br />Village</h2>
            <p className="story-description">
              Far from the rush, closer to what matters. Discover the simple
              joys and generous spirit that make our village feel like home.
            </p>
            <div className="stats-grid" aria-label="Village highlights">
              <div className="stat">
                <strong>10,000+</strong>
                <span>happy visitors</span>
              </div>
              <div className="stat">
                <strong>94%</strong>
                <span>come back again</span>
              </div>
              <div className="stat">
                <strong>Top 100</strong>
                <span>places to unwind</span>
              </div>
              <div className="stat">
                <strong>7+</strong>
                <span>ways to explore</span>
              </div>
            </div>
            <a className="button button-green" href="#visit">Explore the village</a>
          </div>

          <div className="photo-collage" aria-label="Views of the village">
            <img className="photo photo-lake" src={villagePhotos.lake} alt="A calm mountain lake surrounded by green hills" />
            <img className="photo photo-village" src={villagePhotos.village} alt="A quiet wooden home nestled in the countryside" />
            <img className="photo photo-green" src={villagePhotos.green} alt="Sunlight falling through a lush forest" />
            <div className="photo-note">
              <span className="note-mark" aria-hidden="true">✳</span>
              <span>Rooted in nature,<br />made for everyone</span>
            </div>
            <span className="collage-sparkle sparkle-one" aria-hidden="true">✳</span>
            <span className="collage-sparkle sparkle-two" aria-hidden="true">✦</span>
          </div>

          <div className="culture-copy">
            <p className="eyebrow">The feeling of here</p>
            <h2>Authentic culture<br />and charm, where<br />beauty knows no<br className="desktop-break" /> bounds</h2>
            <p>
              Here, life follows the rhythm of the mountains. Every path has a
              story, every meal is shared, and every guest is welcomed as a
              friend.
            </p>
            <ul className="highlight-list">
              {highlights.map((highlight) => (
                <li key={highlight}>
                  <span className="list-check" aria-hidden="true">✓</span>
                  {highlight}
                </li>
              ))}
            </ul>
            <p className="culture-footnote">
              Come for the scenery. Leave with a little piece of village life.
            </p>
          </div>
        </div>
      </section>

      <section
        className="closing-banner"
        id="visit"
        style={{ '--closing-image': `url("${villagePhotos.landscape}")` }}
      >
        <div className="closing-overlay" />
        <div className="closing-content">
          <p className="eyebrow">Find your own kind of magic</p>
          <h2>Endless beauty, natural charm</h2>
          <p>Take a deep breath. You're right where you need to be.</p>
          <a className="button button-outline" href="#our-story">Discover our story</a>
        </div>
      </section>
    </main>
  )
}

export default App
