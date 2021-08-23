import React, { useState, useEffect } from "react";
import getBreeds from "../helpers/getBreeds";
import Error from "./Error";

const SelectElemet = ({ getDogFetch, dog }) => {
  const [breeds, setBreeds] = useState([]);
  const [error,setError] = useState(null);

  useEffect(() => {
    updateBreeds();
  }, []);

  const updateBreeds = () => {
    getBreeds().then((newBreeds) => {
      setBreeds(newBreeds);
      
    }).catch((error)=>{
        console.log(error);
        setError("Error a cargar las razas");
    })

  };

  return (
    <>
      <div className="caja">
        <select onChange={(e) => getDogFetch(e.target.value)}>
          {breeds.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      {error && <Error error={error}></Error>}
    </>
  );
};

export default SelectElemet;
// selected={item.name === dog.breeds.name ? "selected}"