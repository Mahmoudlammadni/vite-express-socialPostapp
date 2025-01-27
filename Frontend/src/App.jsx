import { BrowserRouter, Route, Routes, Link, } from 'react-router-dom';
import Post from './posts';
import Login_form from './LogIn';
import Navigation from './navigation';

import Newpost from './Newpost';

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
      
        <Route path="/" element={<Login_form />} />
        <Route path="/p" element={<Post />} />
        <Route path="/po" element={<Newpost />} />
       
      </Routes> 
    </BrowserRouter>
  );
}
