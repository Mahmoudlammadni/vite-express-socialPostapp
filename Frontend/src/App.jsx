import { BrowserRouter, Route, Routes, Link, useLocation, data } from 'react-router-dom';
import Post from './posts';
import Login_form from './LogIn';
import { useSelector } from 'react-redux';

function Navigation() {
  const location = useLocation();
  const token = useSelector((data)=>data.token)
    
  if (!token  || location.pathname === '/') {
    return null; 
  }

  return (
    
    <nav>
        {console.log(token)}
        
      <Link to="/p">post</Link>
    </nav>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Login_form />} />
        <Route path="/p" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}
