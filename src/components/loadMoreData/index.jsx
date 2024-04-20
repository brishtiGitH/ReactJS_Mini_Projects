import { useEffect } from "react";
import { useState } from "react";
import "./styles.css";

const LoadMoreData = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const data = await response.json();
      setProducts([...products, ...data.products]);
      setLoading(false);

      console.log(data);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  useEffect(
    function () {
      fetchProducts();
    },
    [count]
  );
  useEffect(() => {
    if (products && products.length === 100) setDisabled(true);
  }, [products]);

  if (loading) {
    return <h2>Loading Data...</h2>;
  }
  if (error) {
    return <h2>Error occured: {error}</h2>;
  }
  return (
    <div id="container">
      <div className="products-container">
        {products.map((item) => {
          return (
            <div key={item.id} className="product">
              <img src={item.thumbnail} alt={item.title} />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
      <div className="btn-container">
        <button disabled={disabled} onClick={() => setCount(count + 1)}>
          Load more Products
        </button>
        {disabled && <p>You have reached the limit.</p>}
      </div>
    </div>
  );
};
export default LoadMoreData;
