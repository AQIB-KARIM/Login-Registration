import React from 'react'

const contact = () => {
  return (
    <div className="Container contact">
      <div className="login-box">
        <h2>Contact</h2>


        <form>
          <div className="user-box">
            <input type="text" fname required />
            <label>Firstname</label>
          </div>

          <div className="user-box">
            <input type="text" lname required />
            <label>Lastname</label>
          </div>

          <div className="user-box">
            <input type="email" autoComplete = "off" pattern = "" email required />
            <label>E-mail</label>
          </div>

          <div className="user-box">
            <input type="number" pattern ="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"    number required />
            <label>Phone number</label>
          </div>

          <div className="user-box">
            <input type="text" Address required />
            <label>Address</label>
          </div>

         
        
          < input id = "submit" type = "submit"/>
            <span />
            <span />
            <span />
            <span />
          
        </form>
      </div>
    </div>
  )
}

export default contact
