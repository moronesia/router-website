import React from 'react';
import "./style.css"


const contact = () => {
  return (

    <React.Fragment>
                        <div className="bg">
                <div>
                <h1 className="empat animate__animated animate__fadeInLeft Contact" id="Contact">Contact Me</h1>
                </div>

                <form>
                    <div className="container">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Full name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="your name is...."/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Type your text..." rows="3"></textarea>
                        </div>

                        <div className="col-auto">
                            <button type="submit" className="btn tombol mb-3">Confirm identity</button>
                        </div>
                    </div>
                </form>
             </div>
    </React.Fragment>
  )
}

export default contact;
