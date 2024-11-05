import './imagen.css';

// eslint-disable-next-line react/prop-types
export default function MisImagenes({ link, texto, misrc, mialt }) {
    return (
        <div className="content-image">
            <a className="link" href={link}>
                <img className="imagen" src={misrc} alt={mialt}/>
                <div className="content-text">
                <p className="text">
                    {texto}
                </p>
                </div>
            </a>
        </div>
    );
}
