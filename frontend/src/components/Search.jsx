import { useState } from 'react';
import { useNavigate } from 'react-router';

function Search() {
const [keyword, setKeyWord] = useState('');
const navigate = useNavigate();

const cari = async(event) => {
    event.preventDefault();

    if(keyword.trim() === ''){
      alert('Masukkan Kata Kunci !!');
      return;
    }else if(keyword.length < 3){
      alert('Minimal 3 Huruf Kunci !!');
      return;
    }

    navigate(`/?s=${keyword}`);
    // console.log(keyword)
}

  return (
    <>
      <form className="d-flex" role="search" onSubmit={ cari }>
        <input className="form-control me-2" type="search" placeholder="Search.." 
        value={keyword} onChange={(event) => setKeyWord(event.target.value)} aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </>
  )
}

export default Search;