import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function ProductsPage() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>
              {product.price} {product.currency}
            </p>
            <p>{product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
