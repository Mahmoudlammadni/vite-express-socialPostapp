import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { add } from './action';
import {useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom';

function Login_form() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')

  const [nom,setnom]=useState('')
  const [email2,setemail2]=useState('')
  const [password2,setpassword2]=useState('')
  const dis= useDispatch()
  const nav= useNavigate()
  const toggleForm = () => {
    setIsLoginForm(!isLoginForm); 
  };

  
  function l_in(e) {
    e.preventDefault();
    const user = { email: email, password: password };
    axios.post("http://localhost:3019/api/user/auth", user)
        .then((response) => {
            if (response.data.message) {
              alert('logged in ')
              dis(add(response.data.token))
             nav('/p')
              
            }
        })
        .catch((error) => {
               if (error.status=404){
                 alert('User not found or error in password ')
                }
                else if (error.status=400){
                alert("Email and password are required.")
              }
              else{
                alert("Login failed. Please check your email and password.");
              }
        });
}

function s_up(e) {
    e.preventDefault()
    const add_user={nom:nom,email:email2,password:password2}
    axios.post("http://localhost:3019/api/user/add",add_user)
    .then((res)=>alert("added"))
    .catch((err)=>console.log(err)
    )
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
                    onChange={(e)=>setemail(e.target.value)}
                  />
                  <i className="uil uil-envelope-alt email"></i>
                </div>
                <div className="input_box mb-3">
                  <input type="password" placeholder="Enter your password" className="form-control" required
                  onChange={(e)=>setpassword(e.target.value)}
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
                  <input type="nom"placeholder="Enter your name"className="form-control"required
                  onChange={(e)=>setnom(e.target.value)}
                  />
                </div>
                <div className="input_box mb-3">
                  <input type="email"placeholder="Enter your email"className="form-control"required
                  onChange={(e)=>setemail2(e.target.value)}
                  />
                  <i className="uil uil-envelope-alt email"></i>
                </div>
                <div className="input_box mb-3">
                  <input type="password"placeholder="Create password"className="form-control"required
                  onChange={(e)=>setpassword2(e.target.value)}
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

    </>
  );
}

export default Login_form;
