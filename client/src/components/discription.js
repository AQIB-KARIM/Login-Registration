import React from 'react'



const discription = () => {
  return (
    <div className='container-fluid flex'>

      <div className="card mb-2">
        <img src="https://mdbootstrap.com/img/new/standard/city/041.jpg" className="discrip_img" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional
            content.
            </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>

      <div className="card  text-center descrip-card">
        <div className="card-header"> <h5>Contact Advertiser</h5> </div>
        <div className="card-body">
          <img src='./images/download.png' className="img-fluid" width="300px" height="300px" alt="logo" />
          <p className="card-text-center">
            <h4 className="project_name">Dar-E-Zameen</h4>
          </p>

          <a href="#">
            <button type="button" class="btn btn-primary btn-rounded">Login to Chat</button>
          </a>
          <br></br>

          <a href="#">
            <button type="button" class="btn btn-primary btn-rounded">Reply by E-mail</button>
          </a> <br></br>

        </div>

      </div>

    </div>
  );
}

export default discription

