import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(props){
  var [search,setsearch] = useState("")
  function getData(e){
    setsearch(e.target.value)
  }
  function postData(e){
    e.preventDefault()
    props.changeSearch(search)
    this.setState({search:""})
  }
  
    return (
      <>
        <nav className="navbar navbar-expand-lg background sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand text-light" to="/" onClick={()=>props.changeSearch("")}>HINDI KHABAR</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link  text-light active" aria-current="page" to="/" onClick={()=>props.changeSearch("")}>All</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  text-light" onClick={()=>props.changeSearch("")} to="/politics">Politics</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  text-light" onClick={()=>props.changeSearch("")} to="/Sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  text-light" onClick={()=>props.changeSearch("")} to="/Crime">Crime</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  text-light" onClick={()=>props.changeSearch("")} to="/Education">Education</Link>
                </li>
                <li className="nav-item dropdown ">
                  <Link className="nav-link background  text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Others
                  </Link>
                  <ul className="dropdown-menu text-light">
                    <li><Link className="dropdown-item" onClick={()=>props.changeSearch("")} to="/Science">Science</Link></li>
                    <li><Link className="dropdown-item" onClick={()=>props.changeSearch("")} to="/Technology">Technology</Link></li>
                    <li><Link className="dropdown-item" onClick={()=>props.changeSearch("")} to="/Games">Games</Link></li>
                    <li><Link className="dropdown-item" onClick={()=>props.changeSearch("")} to="/Covid">Covid</Link></li>
                    <li><Link className="dropdown-item" onClick={()=>props.changeSearch("")} to="/Cricket">Cricket</Link></li>
                    <li><Link className="dropdown-item" onClick={()=>props.changeSearch("")} to="/India">India</Link></li>
                    <li><Link className="dropdown-item" onClick={()=>props.changeSearch("")} to="/Jokes">Jokes</Link></li>
                    <li><Link className="dropdown-item" onClick={()=>props.changeSearch("")} to="/World">World</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown ">
                  <Link className="nav-link background  text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Language
                  </Link>
                  <ul className="dropdown-menu ">
                    <li><button className="dropdown-item" onClick={()=>props.changeLanguage('hi')} >Hindi</button></li>
                    <li><button className="dropdown-item" onClick={()=>props.changeLanguage('en')} >English</button></li>
                  
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search" onSubmit={(e)=>postData(e)}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name='search' onChange={(e)=>getData(e)} value={search}/>
                <button className="btn btn-outline-light" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </>
    )
  
}
