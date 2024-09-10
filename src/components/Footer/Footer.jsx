import './footer.css';

const Footer = () => {
    return (
      <footer>
        <div className="main-footer">
          <div className="container">
            <div className="row">
              {/* Columna 1*/}
              <div className="col">
                <h3>Acerca de</h3>
                <ul className="listado">
                  <li><a href="#" className="footer-link">Zap Store</a></li>
                  <li><a href="#" className="footer-link">Responsabilidad social</a></li>
                  <li><a href="#" className="footer-link">Preguntas frecuentes</a></li>
                </ul>
              </div>
              {/* Columna 2*/}
              <div className="col">
                <h3>Ayuda</h3>
                <ul className="listado">
                  <li><a href="#">Comprar</a></li>
                  <li><a href="#">Bases legales</a></li>
                  <li><a href="#">Centro de seguridad</a></li>
                </ul>
              </div>
              {/* Columna 3*/}
              <div className="col">
                <h3>Redes sociales</h3>
                <ul className="listado">
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">Twitter</a></li>
                </ul>
              </div>
              {/* Columna 4*/}
              <div className="col">
                <h3>Servicio al cliente</h3>
                <ul className="listado">
                  <li><a href="#">Contáctenos</a></li>
                  <li><a href="#">Forma De Pago</a></li>
                  <li><a href="#">Número de teléfono</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <img className="logof" src="/logozapstorewhite.png" alt="logo"/>
              <p className="col-sm">
                &copy;{new Date().getFullYear()} ZapStore  | Todos los derechos reservados  | Castro, Los Lagos, Chiloe.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;