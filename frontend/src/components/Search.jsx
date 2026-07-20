import { useState } from 'react';
import { useNavigate } from 'react-router';

function Search() {
  const [keyword, setKeyWord] = useState('');
  const navigate = useNavigate();

  const cari = (event) => {
    event.preventDefault();
    if (keyword.trim() === "") {
      alert("Inputan anda tidak boleh kosong !!");
      return;
    } else if (keyword.length < 3) {
      alert("minimal pencarian 3 karakter !!");
      return;
    }
    // Arahkan ke halaman utama dengan query parameter s
    navigate(`/?s=${keyword}`);
  };

  return (
    <>
      <form className="d-flex" role="search" onSubmit={cari}>
        <input 
          className="form-control me-2" 
          type="search" 
          placeholder="Search.." 
          value={keyword}
          onChange={(event) => setKeyWord(event.target.value)} 
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </>
  );
}

export default Search;