import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Inicio, AcercaDeMi, Proyectos, Tecnologias } from '../pages'
import { Navbar } from '../components/navbar/Navbar'

export const AppRouter = () => {
  return (
    <>
        <Navbar />

        <Routes>
            <Route path='/inicio' element={ <Inicio /> } />
            <Route path='/acercademi' element={ <AcercaDeMi /> } />
            <Route path='/tecnologias' element={ <Tecnologias /> } />
            <Route path='/proyectos' element={ <Proyectos /> } />

            <Route path='/*' element={<Navigate to='/inicio' />} />
        </Routes>
    </>
  )
}
