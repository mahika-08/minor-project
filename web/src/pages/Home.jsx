import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-light p-5 rounded-lg mb-5 text-center shadow-sm">
        <div className="container py-5">
          <h1 className="display-4 fw-bold text-primary mb-3">LokNexus</h1>
          <h2 className="fs-3 text-secondary mb-4">"Local Problems. Academic Minds. Real Solutions."</h2>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: '800px' }}>
            LokNexus bridges the gap between communities and academic institutions. We empower citizens to voice local challenges and connect them with university students and faculty who build real-world solutions.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/challenges" className="btn btn-primary btn-lg px-4">Explore Challenges</Link>
            <Link to="/auth" className="btn btn-outline-primary btn-lg px-4">Join Community</Link>
          </div>
        </div>
      </div>

      {/* Concept Section */}
      <div className="container mb-5">
        <h3 className="text-center mb-4">How It Works</h3>
        <div className="row g-4 text-center">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h4 className="card-title text-primary">1. Community</h4>
                <p className="card-text">Citizens and local governments report civic problems and structural challenges facing their communities.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h4 className="card-title text-primary">2. Academic Innovation</h4>
                <p className="card-text">Universities adopt challenges as academic projects. Faculty guide students in researching and engineering solutions.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h4 className="card-title text-primary">3. Real Impact</h4>
                <p className="card-text">Solutions are deployed back into the community, delivering measurable impact and providing students with real-world experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
