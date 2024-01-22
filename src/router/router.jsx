import React from 'react'
import { Route, Routes } from 'react-router-dom';
import {LandingPage} from "./../pages/LandingPage"
import { About } from '../components/About/About';
import { NavBar } from '../components/NavBar/NavBar';
import { Footer } from '../components/Footer/Footer';
export const Navigator = () => {
  return (
    <>
     <Routes >
         <Route exact path='/' element={<LandingPage/>}/>
       
        <Route path='/about' element={ <>
      <NavBar/>
        <About/>
        <Footer/>
        </>  }/>
        <Route path="*" element={<LandingPage />} />
        </Routes></>
  )
}
