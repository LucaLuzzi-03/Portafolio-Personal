import React from 'react'

export const AcercaDeMi = () => {
  return (
    <div className='acercademi'>
      <div className="acercademi__container">

        <div className="acercademi__container-content">
          <div className="acercademi__container-content_description">
            <h3>Acerca de mi</h3>
            <p>Tengo 19 años y soy desarrollador web junior. Comencé a estudiar programación de forma autodidacta con recursos gratuitos en internet en el año 2020, hasta el día de hoy, en donde ya cuento con numerosos certificados de cursos realizados en plataformas de educacion como Platzy y Udemy.
              <br/>
              <br/>
            Soy una persona responsable y comprometida. La organización para mí es lo más importante para tener un mejor desempeño.
            Soy muy compañero y me gustar ayudar siempre y cuando pueda hacerlo.
              <br/>
              <br/>
            Actualmente tengo dos pasiones, el deporte y el desarrollo web. Desde qué conocí este gran mundo me he enamorado por completo y procuro día a día seguir aprendiendo cosas nuevas y así mejorar cómo programador. 
            </p>
          </div>

          <div className="acercademi__container-content_img">
            <img src="/src/assets/amorchitoo.png" alt="Foto personal" />
          </div>
        </div>

        <div className="acercademi__container-pagina">
          <h3>02</h3>
        </div>

      </div>
    </div>
  )
}
