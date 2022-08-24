import React from 'react'
import "./style.css"


const header = () => {
  return (
    <React.Fragment>
        <header className="jumbotron">
                <div className="container">
                    <h1 className="display-4">I'm <span>Tunjung Anjasmoro</span></h1>
                    <p className="satu">Saat ini saya bekerja sebagai SEO Staff sebagai Link Building Specialist <br />untuk berbagai perusahaan industri dalam upaya peningkatan pemasaran secara digital.</p>
                    <button type="button" className="btn btn-primary">Hire me</button>
                </div>
                </header>
    </React.Fragment>
  )
}

export default header;
