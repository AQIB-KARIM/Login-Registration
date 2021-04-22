import React, { useContext, useState,useEffect } from 'react';
import AuthContext from './auth/AuthContext';

const Register = props => {
 const authContext = useContext(AuthContext);
 const {registeruser,isAuthenticated} = authContext;



useEffect(() => {
  if(isAuthenticated){
    props.history.push("/login");
  }
},[isAuthenticated , props.history])

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const {name,username,email,password,cpassword} = user;

  const onChange = e =>setUser ({
    ...user,[e.target.name]:e.target.value
  });
  
 const onSubmit = e =>{
   e.preventDefault();
  registeruser({
    name,
    username,
    email,
    password,
    cpassword
  })
 };






  return (
    <div className="main">
        <section className="signup">
          <div className="container">
            <div className="signup-content">
            <form  method="POST"   onSubmit ={onSubmit} >
                <h2 className="form-title">Create account</h2>
                <form method="POST" id="signup-form" className="signup-form" >
                <div className="form-group">
                  <input type="text" className="form-input" name="name" value ={name} required  onChange={onChange} id="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-input" name="username" value ={username} required  onChange={onChange} id="username" placeholder="Enter your Username" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-input" name="email" value ={email} required  onChange={onChange} id="email" placeholder="Enter your Email" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-input" name="password" value ={password} required onChange={onChange} id="password" placeholder="Enter your Password" />
                  <span toggle="#password" className="zmdi zmdi-eye field-icon toggle-password" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-input" name="cpassword" value ={cpassword} required  onChange={onChange} id="re_password" placeholder="Repeat your password" />
                </div>
                <div className="form-group">
                  <input type="submit" name="submit"  id="submit" className="form-submit" />
                </div>
              </form>
              <p className="loginhere">
                Have already an account ? <a href="/login" className="loginhere-link">Login here</a>
              </p>
              </form>
            </div>
          </div>
        </section>
     
    </div>

  )
}

export default Register
