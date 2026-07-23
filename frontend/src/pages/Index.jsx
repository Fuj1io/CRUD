import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';

function HomePage() {
 const [users, setUsers] = useState([]);
 const [err, setErr]     = useState(null);
 const [searchParams] = useSearchParams();

  const API = import.meta.env.VITE_API_URL;
  const searchQuery = searchParams.get('s') || '';
  const navigate = useNavigate();

  
  const loadData = useCallback(async() => {
    try {
      let url = API;

      if(searchQuery){
        url = `${API}/search?s=${searchQuery}`;
      }

      const response  = await fetch(url);
      const result    = await response.json();
      const data      = result.data;

      if(!response.ok){
        setUsers([]);
        // setErr(result.message);
        console.log(result.message);
      }else {
        setUsers(data || [])
      }

    } catch (error) {
      return error;
    }
  }, [API, searchQuery]);
  

  const deleteData = async(id) => {
    try {
      const response = await fetch(`${API}/${id}`,{
        method : "DELETE",
        body   : JSON.stringify({ id: id }),
        headers: {
          "Content-Type" : "application/json"
        }
      });
      const result = await response.json();

      if(!response.ok){
        throw new Error(result.message);
      }
      
      loadData()
      return result;
    } catch (error) {
      setErr(error.message)
    }
  }

 useEffect(() => {
  loadData();
 }, [ loadData])



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
              {searchQuery && <button className='btn btn-primary mt-2 position-fixed' onClick={() => navigate(-1)}>Back</button>}
      </div>
    )
  }


export default HomePage;