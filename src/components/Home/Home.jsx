import Carousel from "../Carousel/Carousel.jsx";
import BrandsPage from "../Brands/Brands.jsx";
import ProductsPage from "../Products/Products.jsx";

const Home = () => {
    return (
        <div>
            <Carousel/>
            <h3>Marcas Destacadas</h3>
            <BrandsPage/>
            <ProductsPage/>
        </div>
    )
}
export default Home;