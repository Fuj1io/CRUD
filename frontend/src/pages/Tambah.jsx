import React from 'react'

function TambahData() {
  return (
    <div className='container w-50 border rounded-2 mt-4'>

    <h2>Form Tambah Data</h2>
    <form className='my-2'>
        <div className="mb-3">
            <label  className="form-label">Nama</label>
            <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className='form-control' />
        </div>
        <button type='submit' className='btn btn-primary'>Tambah Data</button>
    </form>
    </div>
  )
}

export default TambahData;