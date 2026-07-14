import React, { useEffect,  useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';

 function FormData() {
  const [Nama, setNama] = useState(''); 
  const [Email, setEmail] = useState('');
  const [NamaById, setNamaById] = useState('');
  const [EmailById, setEmailById] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const API = `http://localhost:3000/users`;
  //--
  const getDataByID = async() => {
    try {
      const response = await fetch(`${API}/${params.id}`);
      const data = await response.json();

      setNamaById(data.nama);
      setEmailById(data.email);
    } catch (error) {
      console.log(error);
    }
  }
  
  function handleClick(e){
    e.preventDefault();
    const userData = {
      nama  : Nama,
      email : Email
    };

     if(!Nama || !Email ){
        alert("Isi Form dengan Lengkap !");
        return;
       }else{
        // IFEE
        {(async() => {
          const response = await fetch(API, {
            method : "POST", 
            headers : {
              "content-type" : "application/json"
            },
            body : JSON.stringify(userData)
          });

          await response.json();
      })()};

        setTimeout(() => {
          alert("Data Berhasil ditambahkan !");
          navigate("/");
        }, 500)
       }
  } // belum jadi

  // update_date
  function updateData(event){
    event.preventDefault();
    
    const data = {
      nama : NamaById,
      email : EmailById
    }

    const update = async() => {
      try {
        const response = await fetch(`${API}/${params.id}`, {
            method : "PUT",
            headers : {
              "content-type" : "aplication/json"
            },
            body : JSON.stringify(data)
          });

          if (response.ok){
            await response.json();
            alert('Data Berhasil diupdate !');
            setTimeout(() => {
              navigate('/');
            }, 800)
          }
      } catch (error) {
        alert("gagal Tambah Data!!")
      }
    }
  
    update();
  }

  useEffect(() => {
    getDataByID();
  }, [])

 
  return (
    <div className='container w-50 border rounded-2 mt-4'>
{
  location.pathname === "/tambah" ?   <h2>Form Tambah Data</h2> : <h2>Form Edit Data</h2> 
}
 
    <form className='my-2 '>
        <div className="mb-3">
            <label  className="form-label">Nama</label>
            { // tambah_data
              location.pathname === "/tambah" ?
              <input type="mail" className="form-control" required
                value={Nama} id="nama" onChange={(e) => setNama(e.target.value)} /> 
                : // edit_data
                <input type="mail" className="form-control" required
                  value={NamaById} id="nama" onChange={(e) => setNamaById(e.target.value)} /> 
            }
        </div>
        <div className="mb-3">
            <label className="form-label" >Email</label>
            {
               location.pathname === "/tambah" ?
               <input type="mail" className="form-control" required
                 value={Email} id="email" onChange={(e) => setEmail(e.target.value)} /> 
              : // edit_data
                 <input type="mail" className="form-control" required
                   value={EmailById} id="email" onChange={(e) => setEmailById(e.target.value)} /> 
            }
           
        </div>
        {
          location.pathname === "/tambah" ? 
          <button type='submit' className='btn btn-primary' onClick={ handleClick }>Tambah Data</button> 
          :
          <div className='d-flex gap-2'>
            <button type='submit' className='btn btn-primary' onClick={ updateData} >Update Data</button> 
            <button className='btn btn-warning' onClick={() => navigate('/')} >Batal</button> 
          </div>

        }
    </form>
    </div>
  )
  }
 
export default FormData;