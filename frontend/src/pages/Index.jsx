import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router';

function HomePage() {
  const [users, setUsers]  = useState([]);
  const [error, setError]  = useState(null);
  const [searchParams] =  useSearchParams();

  const API = import.meta.env.VITE_API_URL;
  // membaca query
  const searchQuery = searchParams.get('s') || '';
  
  const loadData = useCallback(async () => {
    try {
      let url = API;
      // Jika ada kata kunci pencarian, arahkan ke endpoint pencarian backend
      if (searchQuery) {
        url = `${API}/search?s=${searchQuery}`;
      }
      const response = await fetch(url);
      const resData = await response.json();
      
      if (response.ok) {
        setUsers(resData.data || []);
      } else {
        setUsers([]); // Reset data jika pencarian tidak ditemukan (404)
      }
    } catch (error) {
      setError(error.message);
      console.error('error', error);
    }
  }, [API, searchQuery]);

  const deleteData =  async(id) => {
    try {
      const response = await fetch(`${API}/${id}`, {
        method  : "DELETE",
        headers : {
          "Content-Type" : "application/json"
        },
        body    : JSON.stringify({id : id})
      });

      loadData();
      return await response.json();
    } catch (error) {
      console.error("Gagal Hapus Data !");
    }
  }

   useEffect(() => {
        loadData();
  }, [loadData]); 


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
              {users?.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.nama}</td>
                  <td>{user.email}</td>
                  <td className='d-flex gap-2'>
                    <Link to={`/edit/${user.id}`} className='btn btn-primary'>Edit</Link>
                    <button  onClick={ () => deleteData(user.id)} className='btn btn-danger'>Hapus</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    )
  }


export default HomePage;