import React from 'react'

export const Tecnologias = () => {
  return (
    <div className='tecnologias'>
      <div className="tecnologias__container">

        <div className="tecnologias__container-content">
          <div className="tecnologias__container-content_description">
            <h3>Tecnologias</h3>
            <p>A lo largo de este año y medio estudiando de forma autodidacta he pasado por diversos lenguajes y tecnologías.
              <br />
              <br />
              Gracias a los cursos realizados en plataformas cómo Platzi he obtenido sólidos conocimientos en el principal stack de tecnologías para el desarrollo web, estos son: HTML, CSS Y Javascript. Además de tecnologías cómo Git, Github y NPM.
              <br />
              <br />
              Luego fui adentrandome cada vez más y más y he completado una serie de cursos de plataformas como Udemy y Freecodecamp. Aquí aprendí el siguiente stack de tecnologías: React.js, Node.js, Tailwind CSS. En donde además, durante el proceso, fui conociendo y aplicando otras tecnologías complementarias muy útiles cómo React Router y Redux Toolkit.
            </p>
          </div>

          <div className="tecnologias__container-content_images">
            <div className="tecnologias__container-content_images-img">
              <img src="/src/assets/iconos_html.png" alt="javascript image" />
            </div>
            <div className="tecnologias__container-content_images-img">
              <img src="/src/assets/iconos_css.png" alt="javascript image" />
            </div>
            <div className="tecnologias__container-content_images-img">
              <img src="/src/assets/iconos_js.png" alt="javascript image" />
            </div>
            <div className="tecnologias__container-content_images-img">
              <img src="/src/assets/iconos_react-js.png" alt="javascript image" />
            </div>
            <div className="tecnologias__container-content_images-img">
              <img src="/src/assets/iconos_node-js.png" alt="javascript image" />
            </div>
            <div className="tecnologias__container-content_images-img">
              <img src="/src/assets/iconos_tailwind-css.png" alt="javascript image" />
            </div>
          </div>
        </div>

        <div className="tecnologias__container-pagina">
          <h3>03</h3>
        </div>

      </div>
    </div>
  )
}
