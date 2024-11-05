import { PacmanLoader } from 'react-spinners';
import './loading.css';  // Asegúrate de importar tu archivo CSS

export default function Loading(){
    return(
        <div className="loading-container">
            <PacmanLoader color="#2D3A4B" size="70" />
        </div>
    )
}
