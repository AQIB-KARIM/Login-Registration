import React from 'react'

const Login = () => {
    return (
        <div  className="main">
   
        <section className="signup">

          <div className="container">
            <div className="signup-content">
              <form method="POST" id="signup-form" className="signup-form">
                <h2 className="form-title">login</h2>
                
                <div className="form-group">
                  <input type="email" className="form-input" name="email" id="email" placeholder="Your Username" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-input" name="password" id="password" placeholder="Password" />
                  <span toggle="#password" className="zmdi zmdi-eye field-icon toggle-password" />
                </div>
                <div className="form-group">
                  <input type="submit" name="submit" id="submit" className="form-submit" defaultValue="Sign up" />
                </div>
              </form>
              
            </div>
          </div>
          </section>
          </div>
    )
}

export default Login
