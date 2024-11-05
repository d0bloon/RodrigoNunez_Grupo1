import Item from "../Item/Item"
import { getProducts } from "../../data/asyncMock"
import { useEffect, useState } from "react"
import Loading from "../Loading/Loading";
import './itemlist.css';

export default function ItemList(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts().then((data) =>{
            setProducts(data)
            setLoading(false)
        });
    }, []);


    return(
        <>
            {loading ?(
                <div>
                    <Loading />
                </div>
            ):(
                <div className="products">
                    {products.map((prod) =>(
                        <Item {...prod} key={prod.id}/>
                    ))}
                </div>
            )}

        </>
    )
}