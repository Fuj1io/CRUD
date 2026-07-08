import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';


function HomePage() {
  const [users, setUsers]  = useState([]);
  const [error, setError]  = useState(null);

  useEffect(() => {
    const loadData = async() => {
        try {
           const data = await fetch(`http://localhost:3000/users`);
           const userData = await data.json();
           setUsers(userData);
          } catch (error) {
            setError(error.message)
            console.error('error')
          }
        }
        loadData();
  }, [users]);

  return (
    <div className="container">
      <div className="d-flex mt-4 my-4 justify-content-between">
        <Link to="/tambah" className='btn btn-success'>Tambah Data </Link>
      </div>
      <h1 className='mt-4 d-flex justify-content-center'>Halaman Utama</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope='col'>NO</th>
            <th scope='col'>Nama</th>
            <th scope='col'>Email</th>
            <th scope='col'>Aksi</th>
          </tr>
        </thead>
        <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.nama}</td>
                <td>{user.email}</td>
                <td className='d-flex gap-2'>
                  <Link to="/edit" className='btn btn-primary'>Edit</Link>
                  <button href="/delete" className='btn btn-danger'>Hapus</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default HomePage;