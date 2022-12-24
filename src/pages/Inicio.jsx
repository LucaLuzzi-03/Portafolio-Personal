import React from 'react'

import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'

export const Inicio = () => {
  return (
    <div className='inicio'>
      <div className="inicio__container">

        <div className="inicio__container-redes">
          <a href="https://www.linkedin.com/in/luca-luzzi-50734418b/" target='_blank'><BsLinkedin className='linkedin__home-logo' size={30} color='white' /></a>
          <a href="https://github.com/LucaLuzzi-03" target='_blank'><BsGithub className='github__home-logo' size={30} color='white' /></a>
          <a href="https://www.instagram.com/luzziluca6/" target='_blank'><BsInstagram className='instagram__home-logo' size={30} color='white' /></a>
        </div>

        <div className="inicio__container-content">
          <h1>Hola, yo soy...</h1>
          <span>Luca Luzzi</span>
          <h3>Desarrollador web</h3>
        </div>

        <div className="inicio__container-pagina">
          <h2>01</h2>
        </div>

      </div>
    </div>
  )
}
