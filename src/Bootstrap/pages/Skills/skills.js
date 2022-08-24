import React from 'react';
import "./style.css"


const skills = () => {
  return (
    <React.Fragment>
        <div>
                <h1 className="satu animate__animated animate__fadeInLeft Skills" id="Skills">My Basic Skills</h1>
                </div>

                <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeInLeft">
                    <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                        <h5 className="card-title">HTML</h5>
                        <p className="card-text">bahasa markah standar untuk dokumen yang dirancang untuk ditampilkan di peramban internet. Ini dapat dibantu oleh teknologi seperti Cascading Style Sheets dan bahasa scripting seperti JavaScript dan VBScript.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                        <h5 className="card-title">CSS</h5>
                        <p className="card-text">aturan untuk mengatur beberapa komponen dalam sebuah web sehingga akan lebih terstruktur dan seragam. CSS bukan merupakan bahasa pemograman.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                        <h5 className="card-title">Bootstrap</h5>
                        <p className="card-text">kerangka kerja CSS yang sumber terbuka dan bebas untuk merancang situs web dan aplikasi web. Kerangka kerja ini berisi templat desain berbasis HTML dan CSS untuk tipografi, formulir, tombol, navigasi, dan komponen antarmuka lainnya, serta juga ekstensi opsional JavaScript.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    </React.Fragment>
  )
}

export default skills
