import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Footer from './Footer'


export default function App() {

  var [language, setlanguage] = useState("en")
  var [search, setsearch] = useState("")
  const changeLanguage = (data) => {
    setlanguage(data)
  }
  const changeSearch = (data) => {
    setsearch(data)
  }
  return (
    <>
      <BrowserRouter>
        <Navbar changeLanguage={changeLanguage} changeSearch={changeSearch} />
        <Routes>
          <Route path='' element={<Home search={search} language={language} q="All" />} />
          <Route path='/Politics' element={<Home search={search} language={language} q="Politics" />} />
          <Route path='/Sports' element={<Home search={search} language={language} q="Sports" />} />
          <Route path='/Crime' element={<Home search={search} language={language} q="Crime" />} />
          <Route path='/Education' element={<Home search={search} language={language} q="Education" />} />
          <Route path='/Science' element={<Home search={search} language={language} q="Science" />} />
          <Route path='/Technology' element={<Home search={search} language={language} q="Technology" />} />
          <Route path='/Games' element={<Home search={search} language={language} q="Games" />} />
          <Route path='/Covid' element={<Home search={search} language={language} q="Covid" />} />
          <Route path='/Cricket' element={<Home search={search} language={language} q="Cricket" />} />
          <Route path='/India' element={<Home search={search} language={language} q="India" />} />
          <Route path='/Jokes' element={<Home search={search} language={language} q="Jokes" />} />
          <Route path='/World' element={<Home search={search} language={language} q="World" />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )

}
