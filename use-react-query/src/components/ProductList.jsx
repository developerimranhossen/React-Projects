function ProductList({ pr, onMash }) {
  const { products, error, isLoading} = pr;

  if (isLoading) return <div>Fetching Products...</div>;
  if (error) return <div>An erron occured</div>;
  return (
    <div className="flex flex-col justify-center items-center w-3/5">
      <h2 className="text-3xl my-2">Product List</h2>
      <ul className="flex flex-wrap justify-center items-center">
        {products &&
          products.map((product) => (
            <li
              key={product.id}
              className="flex flex-col items-center border rounded-sm m-2"
            >
              <img
                src={product.thumbnail}
                className="object-cover w-96 h-64 rounded-sm"
              />
              <div className="flex justify-around w-full">
                <p className="text-xl my-3">{product.title}</p>
                <button onClick={() => onMash(product.id)}>Details</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ProductList;
