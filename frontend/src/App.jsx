import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch projects from GitHub API for Tuğçe Uygur
    fetch('https://api.github.com/users/Tuucelitto/repos')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok, status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          // Transform GitHub repos to project format
          const transformedProjects = data
            .filter(repo => !repo.fork) // Only show original repos, not forks
            .map((repo, index) => ({
              id: repo.id,
              title: repo.name,
              description: repo.description || 'No description available',
              githubUrl: repo.html_url,
              language: repo.language,
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              updatedAt: new Date(repo.updated_at).toLocaleDateString()
            }));
          setProjects(transformedProjects);
        } else {
          console.error("Data received is not an array, setting to empty:", data);
          setProjects([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch projects:", error);
        setProjects([]); // Fallback to an empty array
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <div className="profile-info">
            <div className="profile-text">
              <h1>Tuğçe Uygur</h1>
              <p className="title">Web Development & Software Engineering</p>
            </div>
          </div>
          <nav className="main-nav">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <section id="about" className="content-section">
          <div className="profile-image-section">
            <img src="/tugceuygur.jpg" alt="Tuğçe Uygur" className="profile-image-large" />
          </div>
          
          <h2>About Me</h2>
          <div className="content-text">
            <p>
              I am a passionate developer with expertise in web development and software engineering. 
              I love creating innovative solutions and working with modern technologies. 
              My focus is on building user-friendly applications that solve real-world problems.
            </p>
            <p>
              With a strong foundation in both frontend and backend development, I strive to create
              seamless digital experiences that make a difference.
            </p>
          </div>
          
          <div className="skills-section">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Docker</span>
            </div>
          </div>
        </section>

        <section id="projects" className="content-section">
          <h2>Projects</h2>
          {loading ? (
            <div className="loading">Loading projects...</div>
          ) : (
            <div className="projects-list">
              {projects.map((project) => (
                <article key={project.id} className="project-item">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <div className="project-meta">
                      {project.language && <span className="language">{project.language}</span>}
                      <span className="stars">⭐ {project.stars}</span>
                      <span className="forks">🍴 {project.forks}</span>
                      <span className="updated">Updated: {project.updatedAt}</span>
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-links">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      View on GitHub
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <section id="contact" className="content-section">
          <h2>Contact</h2>
          <div className="content-text">
            <p>
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
          </div>
          <div className="contact-links">
            <a href="mailto:tugceeuygur@gmail.com" className="contact-link">tugceeuygur@gmail.com</a>
            <a href="https://github.com/Tuucelitto" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
            <a href="https://www.linkedin.com/in/bet%C3%BCl-tu%C4%9F%C3%A7e-uygur-b19858343/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Tuğçe Uygur</p>
      </footer>
    </div>
  );
}

export default App;
