import { BrowserRouter, Route, Routes, Link, useLocation, data } from 'react-router-dom';

function Navigation() {
    const location = useLocation();
      
    if (location.pathname === '/') {
      return null; 
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
          <div className="container">
           
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/p" style={{ color: "blue", fontWeight: "bold" }}>
                    Posts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/po" style={{ color: "blue", fontWeight: "bold" }}>
                    New Post
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
    export default Navigation