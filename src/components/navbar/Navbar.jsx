import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { BurgerMenu } from '../../icons'
import { openMenu } from '../../store/componentsSlice'
import { Menu } from '../menu/Menu'
import './navbar.css'

export const Navbar = () => {

  const { menu } = useSelector(state => state.components);
  const dispatch = useDispatch();

  return (
    <div className='navbar'>

      <div className="navbar__logo">
        <span>{'< Luca />'}</span>
      </div>

      <div className="navbar__links">
        
        <NavLink
          className='navbar__links-item item-1'
          to='/inicio'
        > Inicio </NavLink>

        <NavLink
          className='navbar__links-item item-1'
          to='/acercademi'
        > Acerca de mi </NavLink>

        <NavLink
          className='navbar__links-item item-1'
          to='/tecnologias'
        > Tecnologias </NavLink>

        <NavLink
          className='navbar__links-item item-1'
          to='/proyectos'
        > Proyectos </NavLink>

      </div>

      <div className="navbar__menu" onClick={ () => dispatch(openMenu(false)) }>
          <BurgerMenu />
      </div>

      {
        menu
          ? null
          : <Menu />
      }

    </div>
  )
}
