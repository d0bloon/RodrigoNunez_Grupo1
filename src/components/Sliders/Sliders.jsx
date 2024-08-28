import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faTruckFast, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import './slider.css';

const Slider = () => {
    return (
        <div className="slider-container">
            <div className="slider">
                <div className="slide-track">
                    <div className="slide">ZapStore</div>
                    <div className="slide">
                        <FontAwesomeIcon icon={faInstagram} /> ZapStore.cl
                    </div>
                    <div className="slide">
                        <FontAwesomeIcon icon={faTruckFast} /> Envio Gratis a miembros
                    </div>
                    <div className="slide"> 25% Descuento
                    </div>
                    <div className="slide">ZapStore</div>
                    <div className="slide">
                        <FontAwesomeIcon icon={faInstagram} /> ZapStore.cl
                    </div>
                    <div className="slide">
                        <FontAwesomeIcon icon={faTruckFast} /> Envio Gratis a miembros
                    </div>
                    <div className="slide">25% Descuento</div>
                    <div className="slide">ZapStore</div>
                    <div className="slide">
                        <FontAwesomeIcon icon={faInstagram} /> ZapStore.cl
                    </div>
                    <div className="slide">
                        <FontAwesomeIcon icon={faTruckFast} /> Envio Gratis a miembros
                    </div>
                    <div className="slide">25% Descuento</div>
                </div>
            </div>
        </div>
    )
}
export default Slider;