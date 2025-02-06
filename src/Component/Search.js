import axios from "axios";
import React, {useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {


  const navigate = useNavigate();
  useEffect(()=>{
      let username = sessionStorage.getItem('username');
      if(username === ' ' || username === null){
          navigate('/login');
      }
  },[])

  const [name, setKeyword] = useState('');
  const [results, setResults] = useState([]);
  const handleSearch = async () => {
    try {
      const res = await axios(`http://localhost:8080/product/searchName?name=${name}`);
      setResults(res.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  return (
    <div id="search1">
      <input
        type="text"
        className="form-control-sm"
        value={results.name}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search products..."
      />
      <button onClick={handleSearch} className="btn btn-primary">Search</button>
      <ul>
        {results.map((product) => (
          <li key={product.id}>Name : {product.name}  Category : {product.category} Price :  {product.price} 
          
          <a href={`/product/${product.id}`} className="btn btn-success">Buy Now</a></li>
        ))}
      </ul>
    </div>
  );
};
export default Search;
