import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Slider = () => {
    return (
        <div className="slider-container">
            <div className="slider">
                <div className="slide-track">
                    <div className="slide">ZapStore</div>
                    <div className="slide">
                        <FontAwesomeIcon icon={faInstagram} /> ZapStore.cl
                    </div>
                    <div className="slide">Envio Gratis a miembros</div>
                    <div className="slide">25% Descuento</div>
                    {/* Repetimos las diapositivas para un efecto continuo */}
                    <div className="slide">ZapStore</div>
                    <div className="slide">
                        <FontAwesomeIcon icon={faInstagram} /> ZapStore.cl
                    </div>
                    <div className="slide">Envio Gratis a miembros</div>
                    <div className="slide">25% Descuento</div>
                    {/* Duplicamos las diapositivas */}
                    <div className="slide">ZapStore</div>
                    <div className="slide">
                        <FontAwesomeIcon icon={faInstagram} /> ZapStore.cl
                    </div>
                    <div className="slide">Envio Gratis a miembros</div>
                    <div className="slide">25% Descuento</div>
                </div>
            </div>
        </div>
    );
};

export default Slider;