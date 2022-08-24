import React from 'react';
import "./style.css"


const friends = () => {
  return (
    <React.Fragment>
         <div>
                <h1 className="tiga animate__animated animate__fadeInLeft Friends" id="Friends">My Close Friends</h1>
            </div>

                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeInLeft">
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                <h5 className="heading">Arya</h5>
                                <hr className="garis"/>
                                <p className="alamat">Yogyakarta</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                <h5 className="heading">Christ</h5>
                                <hr className="garis"/>
                                <p className="alamat">Yogyakarta</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body">
                                <h5 className="heading">Andre</h5>
                                <hr className="garis"/>
                                <p className="alamat">Jawa Tengah</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </React.Fragment>
  )
}

export default friends
