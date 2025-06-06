import React, { useState, useEffect, useRef } from 'react';
import './index.css';

const sunIcon = (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const moonIcon = (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M21 12.79A9 9 0 0111.21 3 7 7 0 1012 21a9 9 0 009-8.21z" />
  </svg>
);

const codeIcon = (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const extraOpenIcon = (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const extraCloseIcon = (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const thirdIcon = (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 0.9 2 2v12c0 1.1-0.9 2-2 2H4c-1.1 0-2-0.9-2-2V6c0-1.1 0.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [codePopupOpen, setCodePopupOpen] = useState(false);
  const [extraOpen, setExtraOpen] = useState(false);
  const [selectedPoster, setSelectedPoster] = useState(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

useEffect(() => {
  document.body.classList.toggle('dark-mode', darkMode);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') setSelectedPoster(null);
  };

  const handleScroll = () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  const atTop = scrollTop === 0;
  const atBottom = scrollTop + windowHeight >= docHeight;

  setHeaderVisible(atTop || atBottom);
  };

  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('scroll', handleScroll);

  // Call it once to set initial state
  handleScroll();

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('scroll', handleScroll);
  };
}, [darkMode]);

  const posters = [
    '/posters/JUICEWRLDBLACK.png',
    '/posters/BRUTAL2.jpg',
    '/posters/JUICEWRLDWHITE.png',
    '/posters/BRUTAL3 v2.jpg',
    '/posters/BRUTAL4.png',
  ];

  return (
    <div className="App">
      <header className={`App-header ${!headerVisible ? 'scrolled' : ''}`}>
        <nav>
          {['HOME', 'ABOUT', 'MY WORK'].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </nav>
      </header>

      <main>
        {/* New Intro Section */}
        <section id="introtext" className="intro-section">
          <div className="intro-section">
  <div className="intro-text">
    <h1>Welcome</h1>
    <p>
      Welcome to my design space, a haven of bold aesthetics and creative intention. 
      I craft visuals that communicate more than just beauty—they express stories, moods, 
      and moments. From conceptual posters to personal explorations, this space is a reflection 
      of curiosity, rebellion, and order. Dive in and experience design that invites a reaction 
      and demands a pause. Here, nothing is accidental.
    </p>
  </div>
  <img
    src="portrait.png"
    alt="Intro"
    className="intro-image"
  />
</div>
        </section>

        <section id="extra-content">
          <div className="extra-grid">
            <div className="square-block picture-block">
              <img src="/images/square-image.jpg" alt="Square visual" loading="lazy" />
            </div>
            <div className="square-block paragraph-block">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="vertical-rectangle picture-block">
              <img src="/images/vertical-image.jpg" alt="Vertical visual" loading="lazy" />
            </div>
          </div>
        </section>

        <section id="POSTERS">
          <h2>POSTERS</h2>
          <div className="posters-grid">
            {posters.map((src, idx) => (
              <div className="poster-item" key={idx} onClick={() => setSelectedPoster(src)}>
                <img src={src} alt={`Poster ${idx + 1}`} />
              </div>
            ))}
          </div>
        </section>

         <section>
            
            <div className='big-sq'>
              <div className='big-sq-content'>
                TEST
              </div>
            </div>

          </section>   

      </main>

      {selectedPoster && (
        <div className="poster-overlay" onClick={() => setSelectedPoster(null)}>
          <img src={selectedPoster} alt="Full screen poster" />
        </div>
      )}

      <div className={`button-group ${extraOpen ? 'extra-open' : ''}`}>
        <div className="button-stack">
          <button
            id="dark-mode-btn"
            className="toggle-btn"
            aria-label="Toggle dark mode"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? sunIcon : moonIcon}
          </button>

          <button
            id="code-tools-btn"
            className="toggle-btn"
            aria-label="Toggle code tools"
            onClick={() => setCodePopupOpen(!codePopupOpen)}
          >
            {codeIcon}
          </button>

          <button
            id="third-btn"
            className="toggle-btn"
            aria-label="Third Button"
            onClick={() => alert('Third Button Action')}
          >
            {thirdIcon}
          </button>
        </div>

        <button
          id="extra-toggle-btn"
          className="toggle-btn"
          aria-label="Toggle extra"
          onClick={() => setExtraOpen(!extraOpen)}
        >
          {extraOpen ? extraOpenIcon : extraCloseIcon}
        </button>
      </div>

      {codePopupOpen && (
        <div className="code-popup">
          Code Tools Links Here
        </div>
      )}
    </div>
  );
}

export default App;
