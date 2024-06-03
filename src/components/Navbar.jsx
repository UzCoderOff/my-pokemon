import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav = useNavigate()
  const [input, setInput] = useState('')

  const search = (e) => {
    e.preventDefault()
    if(input){
      nav(`/search/${input}`)
      }
  }

  return (
    <div className="navbar">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
        alt=""
        onClick={()=> nav('/')}
      />
      <form onSubmit={search} >
        <input type="search" placeholder="Search..." onChange={(e)=> setInput(e.target.value)} />
      </form>
      <div></div>
    </div>
  );
};

export default Navbar;
