import {useState, useEffect} from 'react';
// import './App.css';
import Cards from "./components/Cards/Cards";

function App() {

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(()=> {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const response = await fetch("https://dummyjson.com/products?limit=100");
        const data = await response.json();
        console.log(data);
        if (data && data.products) {
            setProducts(data.products);
        }
    }

    return (
        <div>
            {products.length > 0 && 
            <div>
                {products.map((prod) => {
                    return <Cards
                    page={page}
                    productList={prod}
                    key={prod.id}
                    />
                })}
                
            </div>}
      
        </div>
  );
}

export default App;
