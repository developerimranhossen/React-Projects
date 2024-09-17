import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";


const retrieveProducts = async ({ queryKey }) => {
  const response = await axios.get(`http://localhost:3000/${queryKey[0]}`);

  return response.data;
};

function App() {
  const [id, setId] = useState()
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: retrieveProducts,
    retry: false,
  });

  
  function handleClick(itemId) {
    setId(itemId)
  }
  

  return (
    <div className="flex m-2">
      <ProductList pr = {{products, error, isLoading}} onMash = {handleClick} />
      <ProductDetails id={id} />
    </div>
  );
}

export default App;
