import {useState, useEffect} from 'react';
import classes from "./App.module.css";
import Cards from "./components/Cards/Cards";

function App() {

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(()=> {
        fetchProducts();
    }, [page]);

    const fetchProducts = async () => {
        let response;
        console.log(page);
        if (page > 0)
            response = await fetch(`https://dummyjson.com/products?limit=10&skip=${(page)*10}`);
        else
            response = await fetch(`https://dummyjson.com/products?limit=10`);
        
            const data = await response.json();
        console.log(data);
        if (data && data.products) {
            setProducts(data.products);
            setTotal(data.total);
        }
    }

    const changePage = (pageNumber) => {
        console.log(pageNumber, page);
        if (pageNumber >= 0 && pageNumber < total/10 && pageNumber !== page) {
            setPage(pageNumber);
        }    
    }

    return (
        <div className={classes.main__container}>
            {products.length > 0 && 
            <div>
                {products.map((prod) => (
                    // if {} is used instead of (), then return has to be added before Cards, because it will become block scope
                    <Cards
                    page={page}
                    productList={prod}
                    key={prod.id}
                    />
                ))}
            </div>}
            <div className={classes.page__numbers}>
                <span onClick={()=>changePage(page-1)} className={`${classes.buttons} ${page > 0 ? "" : classes.disable}`}>⬅️</span>
                {products.length > 0 && [...Array(total/10)].map((_, i) => {
                    // we used return here because {} has been used
                    return <span className={`${classes.buttons} ${i === page ? classes.page_selected : ""}`} key={i} onClick={()=>changePage(i)}>{i}</span>
                })}
                
                <span onClick={()=>changePage(page+1)} className={`${classes.buttons} ${page < total/10 - 1 ? "" : classes.disable}`}>➡️</span>
            </div>
            
      
        </div>
  );
}

export default App;
