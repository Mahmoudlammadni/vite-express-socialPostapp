import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App2() {
  const [isLoginForm, setIsLoginForm] = useState(true); // State to toggle between login and signup

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm); // Toggle between login and signup forms
  };
function l_in(e) {
    e.preventDefault()
    alert('log in')
    
}
function s_up(e) {
    e.preventDefault()
    alert('sign up')
}
  return (
    <>
      
     
      <section className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
        <div className="form_container bg-white p-4 rounded shadow-sm w-75 w-sm-50 w-md-40 w-lg-25">
          <i className="uil uil-times form_close"></i>

     
          {isLoginForm ? (
            // Login form
            <div className="form login_form">
              <form action="#" onSubmit={l_in}>
                <h2 className="text-center mb-4" >Login</h2>
                <div className="input_box mb-3">
                  <input type="email" placeholder="Enter your email" className="form-control"required
                  />
                  <i className="uil uil-envelope-alt email"></i>
                </div>
                <div className="input_box mb-3">
                  <input type="password" placeholder="Enter your password" className="form-control" required
                  />
                  <i className="uil uil-lock password"></i>
                  <i className="uil uil-eye-slash pw_hide"></i>
                </div>
                <div className="option_field d-flex justify-content-between align-items-center">
                  <span className="checkbox">
                    <input type="checkbox" id="check" />
                    <label htmlFor="check">Remember me</label>
                  </span>
                  <a href="#" className="forgot_pw">Forgot password?</a>
                </div>
                <button className="btn btn-primary w-100 mt-3">Login Now</button>
                <div className="login_signup mt-3 text-center">
                  Don't have an account? <a href="#" onClick={toggleForm}>Signup</a>
                </div>
              </form>
            </div>
          ) : (
            // Signup Form
            <div className="form signup_form">
              <form action="#" onSubmit={s_up}>
                <h2 className="text-center mb-4">Signup</h2>
                <div className="input_box mb-3">
                  <input type="email"placeholder="Enter your name"className="form-control"required
                  />
                </div>
                <div className="input_box mb-3">
                  <input type="email"placeholder="Enter your email"className="form-control"required
                  />
                  <i className="uil uil-envelope-alt email"></i>
                </div>
                <div className="input_box mb-3">
                  <input type="password"placeholder="Create password"className="form-control"required
                  />
                  <i className="uil uil-lock password"></i>
                  <i className="uil uil-eye-slash pw_hide"></i>
                </div>
                <div className="input_box mb-3">
                  <input type="password"placeholder="Confirm password"className="form-control"required
                  />
                  <i className="uil uil-lock password"></i>
                  <i className="uil uil-eye-slash pw_hide"></i>
                </div>
                <button className="btn btn-primary w-100 mt-3" >Signup  Now</button>
                <div className="login_signup mt-3 text-center">
                  Already have an account? <a href="#" onClick={toggleForm}>Login</a>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      <script src="script.js"></script>
    </>
  );
}

export default App2;
