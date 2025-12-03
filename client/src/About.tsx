import './App.css';
import CryptoDonation from "./CryptoDonation";

function About() {
  return (
    <div className="about-container glass-panel">
      
      <h2 className="about-main-title">Under the hood</h2>


<div className="medical-disclaimer">
  ⚠️ Important: This is not a medical service. This application is a technology demonstration only and may produce incorrect results. Please consult a doctor for any skin issues.
</div>
      
      <p className="about-text">
        Welcome to a <span className="highlight">next-generation health-tech experiment</span>. 
        This project merges the speed of modern web frameworks with the predictive power 
        of machine learning to tackle real-world health challenges.
      </p>
      <h3 className="about-section-title">The application</h3>
      <p className="about-text">
        The core feature of this platform is the <strong>skin screening</strong> module. 
        Using a custom-trained <strong>ML.NET</strong> model, the application analyzes uploaded 
        images to detect patterns associated with moles, skin cancer, and melanoma. 
        It demonstrates how .NET technologies can be effectively deployed in diagnostic scenarios.
      </p>
      <h3 className="about-section-title">The tech stack</h3>
      <p className="about-text">
        We are pushing the boundaries of performance by utilizing the latest tooling 
        in the TypeScript and .NET ecosystems:
      </p>

      <div className="tech-list">
        
        <div className="tech-card">
          <span className="tech-label">Machine learning</span>
          <span className="tech-value">ML.NET</span>
          <div style={{fontSize: '0.9rem', opacity: 0.7, marginTop: '5px'}}>Image classification</div>
        </div>

        <div className="tech-card">
          <span className="tech-label">Server</span>
          <span className="tech-value">ASP.NET Core</span>
          <div style={{fontSize: '0.9rem', opacity: 0.7, marginTop: '5px'}}>Web API</div>
        </div>

        <div className="tech-card">
          <span className="tech-label">Client-side</span>
          <span className="tech-value">React + TypeScript</span>
          <div style={{fontSize: '0.9rem', opacity: 0.7, marginTop: '5px'}}>SWC compiler</div>
        </div>

        <div className="tech-card">
          <span className="tech-label">Build & runtime</span>
          <span className="tech-value">Vite & Bun</span>
          <div style={{fontSize: '0.9rem', opacity: 0.7, marginTop: '5px'}}>High performance</div>
        </div>

        <div className="tech-card">
          <span className="tech-label">Support the project</span>
          <span className="tech-value"><img src="/assets/algorand.jpg" alt="algorand wallet qr code"/></span>
          <div style={{fontSize: '0.9rem', opacity: 0.7, marginTop: '5px'}}>You can support the project by sending Algo</div>
        </div>

      </div>
      <h3 className="about-section-title">The roadmap</h3>
      <div className="roadmap-box">
        <p className="about-text" style={{margin: 0}}>
          While we are starting with dermatology, the architecture is designed for scale. 
          I am actively developing this project into a full-suite <strong>health management system</strong>, 
          capable of handling diverse medical data and providing holistic health insights in the future.
        </p>
      </div>

      <div style={{ marginTop: '3rem' }}>
          <CryptoDonation />
      </div>

    </div>
  );
}

export default About;