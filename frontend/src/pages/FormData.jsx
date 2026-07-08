import React, { useState } from 'react';

 function FormData() {
  const [nama, setNama] = useState(''); 
  const [email, setEmail] = useState(''); 
  
  function handleClick(e){
    e.preventDefault();
    const API = `http://localhost:3000/users`;
   
    const userData = {
      nama  : nama,
      email : email
    };

    //POST_METHOD
    const postData =  async() => {
      const post = await fetch(API, {
        method : "POST", 
        headers : {
          "content-type" : "aplication/json"
        },
        body : JSON.stringify(userData)
      });

      await post.json();
    } 
    
    if(!nama || !email){
      // alert("Isi Form dengan lengkap !");
    } else {
      postData();
      setNama = '';
      setEmail = '';
    }
  }

  return (
    <div className='container w-50 border rounded-2 mt-4'>

   <h2>Form Tambah Data</h2> 
    <form className='my-2'>
        <div className="mb-3">
            <label  className="form-label">Nama</label>
            <input type="text" className="form-control" required value={nama} onChange={(e) => setNama(e.target.value)} />
        </div>
        <div className="mb-3">
            <label className="form-label" >Email</label>
            <input type="email" className='form-control' required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type='submit' className='btn btn-primary' onClick={handleClick}>Tambah Data</button>
    </form>
    </div>
  )
}

export default FormData;