import React from 'react'
import { NavLink } from 'react-router-dom'

import { Close } from '../../icons'
import './menu.css'

export const Menu = () => {
  return (
    <>
        <div className='menu'>
            
            <NavLink
            className='navbar__links-item item-1'
            to='/inicio'
            onClick={ () => {dispatch(closeMenu(true))} }
            > Inicio </NavLink>

            <NavLink
            className='navbar__links-item item-1'
            to='/acercademi'
            onClick={ () => {dispatch(closeMenu(true))} }
            > Acerca de mi </NavLink>

            <NavLink
            className='navbar__links-item item-1'
            to='/tecnologias'
            onClick={ () => {dispatch(closeMenu(true))} }
            > Tecnologias </NavLink>

            <NavLink
            className='navbar__links-item item-1'
            to='/proyectos'
            onClick={ () => {dispatch(closeMenu(true))} }
            > Proyectos </NavLink>

        </div>

        <Close />
    </>
  )
}
