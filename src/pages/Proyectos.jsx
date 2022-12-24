import React, { useRef } from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

export const Proyectos = () => {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 400;
    } else {
      current.scrollLeft += 400;
    }
  }

  return (
    <div className='proyectos'>
      <div className="proyectos__container">

        <div className="proyectos__container-content">
          <div className="proyectos__container-content_title">
            <h3>Proyectos</h3>
          </div>

            <div className="proyectos__container-content_proyectos" ref={scrollRef} >
              <div className="proyecto">
                <img src="src/assets/restaurante.png" alt="project image" />
                <p>Si estabas buscando un restaurante lindo y moderno a donde ir a comer este fin de semana, entra aquí abajo y lee más de nosotros.</p>
                <div className='proyectos__container-content_links'>
                  <span><a href="https://gerichtapp.netlify.app/">Ver mas...</a></span>
                  <a href="https://github.com/LucaLuzzi-03/GerichtApp">< BsGithub className='github__logo' /></a>
                </div>
              </div>
              <div className="proyecto">
                <img src="src/assets/hoobank.png" alt="project image" />
                <p>Deja de preocuparte por tu dinero, con Hoobank tu dinero está completamente a salvo y generando ingresos. Entra aquí abajo para más información.</p>
                <div className='proyectos__container-content_links'>
                  <span><a href="https://hoobank-ll.netlify.app/">Ver mas...</a></span>
                  <a href="https://github.com/LucaLuzzi-03/Hoobank">< BsGithub className='github__logo' /></a>
                </div>
              </div>
              <div className="proyecto">
                <img src="src/assets/gpt3.png" alt="project image" />
                <p>GPT-3 vino a revolucionar el mundo con la ayuda de la inteligencia artificial. No pierdas tu tiempo y entra al link de aquí abajo y aprende más sobre el futuro.</p>
                <div className='proyectos__container-content_links'>
                  <span><a href="https://gpt3ll-app.netlify.app/">Ver mas...</a></span>
                  <a href="https://github.com/LucaLuzzi-03/GPT-3">< BsGithub className='github__logo' /></a>
                </div>
              </div>
              <div className="proyecto">
                <img src="src/assets/gifexpertapp.png" alt="project image" />
                <p>Busca los GIFS más populares de estos momentos en Gif Expert App. Entra aquí abajo y pasa un día divertido.</p>
                <div className='proyectos__container-content_links'>
                  <span><a href="https://lucaluzzi-03.github.io/Gif-Expert-App/">Ver mas...</a></span>
                  <a href="https://github.com/LucaLuzzi-03/Gif-Expert-App">< BsGithub className='github__logo' /></a>
                </div>
              </div>
              <div className="proyecto">
                <img src="src/assets/reduxstore.png" alt="project image" />
                <p>Compra tu siguiente celular en la tienda Redux Toolkit. Ingrese en el link de aquí abajo para realizar la compra.</p>
                <div className='proyectos__container-content_links'>
                  <span><a href="https://reduxapp-ll.netlify.app/">Ver mas...</a></span>
                  <a href="https://github.com/LucaLuzzi-03/Redux-app">< BsGithub className='github__logo' /></a>
                </div>
              </div>
            </div>

          <div className="proyectos__container-content_arrows">
            <BsArrowLeftShort className='arrow-icon arrow-icon_left' onClick={() => scroll('left')} />
            <BsArrowRightShort className='arrow-icon arrow-icon_right' onClick={() => scroll('right')} />
          </div>

        </div>

        <div className="proyectos__container-pagina">
          <h3>04</h3>
        </div>

      </div>
    </div>
  )
}
