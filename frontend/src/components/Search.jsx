import { useState } from 'react';
import { useNavigate } from 'react-router';

function Search() {
  const [keyword, setKeyword] = useState("");
  const navigate              = useNavigate();

  const cari = async(event) => {
  event.preventDefault();
  
  if(!keyword || keyword.trim() === "" || keyword.code === "Space"){
    alert("Masukkan Kata Pencarian !!");
    return
  }else if(keyword.length < 3){
    alert("Masukkan Minimal 3 huruf !!");
    return
  }

  navigate(`/?s=${keyword}`);
}

  return (
    <>
      <form className="d-flex" role="search" onSubmit={ cari }>
        <input className="form-control me-2" type="search" placeholder="Search.." 
        value={keyword} onChange={(e) => setKeyword(e.target.value)} aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </>
  )
}

export default Search;