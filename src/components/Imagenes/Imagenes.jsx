import './imagen.css';
export default function MisImagenes ({misrc, mialt}){
    return (
        <img className="imagen" src={misrc} alt={mialt} />
    )
}
