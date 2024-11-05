import ItemList from "../ItemList/ItemList";
import './products.css';  // Asegúrate de importar tu archivo CSS

export default function ProductPage(){
    return(
        <div className="container">
            <ItemList />
        </div>
    )
}