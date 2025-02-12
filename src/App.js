import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [sampleProduct, setSampleProduct] = useState(undefined);

  useEffect(() => {
    fetch("/api/products.json")
    .then(res => res.json())
    .then(res => setProducts(res));
  }, []);

  useEffect(() => {
    fetch("/api/products/1.json")
    .then(res => res.json())
    .then(res => setSampleProduct(res));
  }, []);
  
  return <div>
    <h1 className="text-3xl font-bold text-center mt-3 mb-3">App</h1>
    {sampleProduct && <div>The first product is: {sampleProduct.name}</div>}
    <ul>
      {products.map(p => <li key={p.id}>
        <figure>
          <img src={`/images/${p.imageUrl}`}></img>
          <figcaption>{p.name} - {p.description}</figcaption>
        </figure>
      </li>)}
    </ul>
  </div>
}

export default App;