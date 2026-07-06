import React from 'react';
import { useState, useEffect } from 'react';
import data from "../public/dummy.json";


function HomePage() {
  const [users, setUsers]  = useState(data);

  return (
    <div className="container">
      <div className="d-flex mt-4 my-4 justify-content-between">
        <a href="/tambah" className='btn btn-success'>Tambah Data</a>
      </div>
      <h1 className='mt-4 d-flex justify-content-center'>Halaman Utama</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope='col'>Nama</th>
            <th scope='col'>Email</th>
            <th scope='col'>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.data.map((user, index) => (
         <tr>
          <th scope='row'>{user.id}</th>
          <td>{user.nama}</td>
          <td>{user.email}</td>
          <td className='d-flex gap-2'>
            <button className="btn btn-primary">Edit</button>
            <button className="btn btn-danger">Hapus</button>
          </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HomePage;