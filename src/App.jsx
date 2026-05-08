import { useState } from 'react'
import './index.css'

function App() {
  // El estado para controlar qué pestaña está activa
  const [seccionActiva, setSeccionActiva] = useState('inicio')

  return (
    <div className="contenedor">
      {/* --- BARRA DE NAVEGACIÓN --- */}
      <nav className="navbar">
        <h2 className="logo">Mi Portfolio</h2>
        <ul className="menu">
          <li 
            className={seccionActiva === 'inicio' ? 'activo' : ''} 
            onClick={() => setSeccionActiva('inicio')}
          >
            Inicio
          </li>
          <li 
            className={seccionActiva === 'sobre-mi' ? 'activo' : ''} 
            onClick={() => setSeccionActiva('sobre-mi')}
          >
            Sobre Mí
          </li>
          <li 
            className={seccionActiva === 'proyectos' ? 'activo' : ''} 
            onClick={() => setSeccionActiva('proyectos')}
          >
            Proyectos
          </li>
        </ul>
      </nav>

      {/* --- CONTENIDO DINÁMICO --- */}
      <main className="contenido">
        
      {/* Pestaña: INICIO */}
      {seccionActiva === 'inicio' && (
        <section className="seccion-pantalla-completa animacion-entrada">
          <div className="contenedor-centrado">
            <h1>Fabián De Simone</h1>
            <div className="badge-container">
              <span className="badge react">React</span>
              <span className="badge csharp">C#</span>
            </div>
            <h2 className="titulo-tech">Software & Web Developer</h2>
            <p className="subtitulo">
              Especializado en el desarrollo de interfaces modernas y aplicaciones funcionales de alto rendimiento.
            </p>
          </div>
        </section>
      )}

      {/* Pestaña: SOBRE MÍ */}

      {seccionActiva === 'sobre-mi' && (
        <section className="seccion-pantalla-completa animacion-entrada">
          <div className="layout-grid-cv">
            
            <div className="col-cv-izq">
              <span className="tagline">Perfil Profesional</span>
              <h2 className="nombre-cv">Fabián <br/> De Simone</h2>
              <p className="bio-cv">
                Estudiante de <strong>Ingeniería en Sistemas</strong> con sólida formación técnica 
                y experiencia práctica en desarrollo Back-End. Me especializo en crear aplicaciones 
                a medida utilizando <strong>C# .Net</strong> y <strong>React.js</strong>.
              </p>
              
              <div className="educacion-cv">
                <h3>Formación Académica</h3>
                <p><strong>UAI</strong> | Ingeniería en Sistemas Informáticos (2do año actualmente)</p>
                <p><strong>UCA</strong> | Ingeniería en Informática (Hasta 3er año completado)</p>
              </div>
            </div>

            <div className="col-cv-der">
              <h3>Experiencia Técnica</h3>
              
              <div className="card-cv">
                <h4>Freelancer Developer</h4>
                <p>Desarrollo de aplicaciones de escritorio y web para clientes particulares.</p>
                <p>Manejo de SQL Server, SQLite y lógica de negocio compleja.</p>
              </div>

              <div className="card-cv">
                <h4>Pasantía UCA</h4>
                <p>Gestión de bases de datos SQL y soporte técnico especializado.</p>
                <p>Migración de infraestructura física a entornos virtuales y optimización de recursos.</p>
              </div>
              
              <p className="idioma-cv">Nivel de Inglés: Intermedio</p>
            </div>

          </div>
        </section>
      )}

      {seccionActiva === 'proyectos' && (
  <section className="seccion-pantalla-completa animacion-entrada">
    <div className="layout-proyectos">
      <h2>Algunos de mis Proyectos</h2>
      
      <div className="grid-proyectos-duo">
        
        {/* CARD 1: REPOSITORIO GITHUB */}
        <div className="card-proyecto-nueva">
          <div className="card-header">
            <span className="icon">📂</span>
            <h4>Repositorio</h4>
          </div>
          <p>
            Acá vas a encontrar implementaciones y challenges en <strong>C#</strong>, 
            <strong>Visual Basic</strong> y <strong>React.js</strong>. 
          </p>
          <div className="card-footer">
            <a 
              href="https://github.com/FabianDeSimone" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-proyecto"
            >
              Ver GitHub →
            </a>
          </div>
        </div>

        {/* CARD 2: MOVIE TRACKER APP */}
        <div className="card-proyecto-nueva">
          <div className="card-header">
            <span className="icon">🎬</span>
            <h4>Movie Tracker App</h4>
          </div>
          <p>
            Aplicación desarrollada en <strong>React + Vite</strong> que consume la API de TMDB. 
            Incluye búsqueda dinámica, paginación y diseño responsive.
          </p>
          <div className="card-footer">
            <a 
              href="https://movie-app-TU-LINK.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-proyecto"
            >
              Probar App →
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
)}

      </main>
    </div>
  )
}

export default App