import React from 'react';
import "./style.css"


const others = () => {
  return (
    <React.Fragment>
         <div>
                <h1 className="dua animate__animated animate__fadeInLeft Others" id="Others">My Other Skills</h1>
                </div>

                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeInLeft">
                    <div className="col">
                        <div className="card h-100">
                        <div className="card-body">
                            <h5 className="judul">Graphic Design</h5>
                            <p className="text">proses komunikasi menggunakan elemen visual, seperti tipografi, fotografi, serta ilustrasi yang dimaksudkan untuk menciptakan persepsi akan suatu pesan yang disampaikan. Bidang ini melibatkan proses komunikasi visual dan desain komunikasi.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <div className="card-body">
                            <h5 className="judul">Content Writer</h5>
                            <p className="text">seorang penulis profesional yang memproduksi konten-konten menarik di media online. Konten yang mereka ciptakan bisa berbentuk artikel blog, post di sosial media, atau apa pun yang ditulis dalam platform online.</p>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                        <div className="card-body">
                            <h5 className="judul">SEO</h5>
                            <p className="text">serangkaian proses yang dilakukan secara sistematis yang bertujuan untuk meningkatkan volume dan kualitas trafik kunjungan melalui mesin pencari menuju situs web tertentu dengan memanfaatkan mekanisme kerja atau algoritma mesin pencari tersebut.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    </React.Fragment>
  )
}

export default others
