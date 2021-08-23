import Cards from "./components/Cards";
import "./components/Cards.css";
import "./App.css";
import "./components/selectElement.css";
import SelectElemet from "./components/SelectElemet";
import React, { useState, useEffect } from "react";
import getDog from "./helpers/getDog";
import Error from "./components/Error";


const initialDog = {
  img: "",
  breeds: {
    id: 0,
    name: "",
  },
};

function App() {
  const [dog, setDog] = useState(initialDog);
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState(null);

  const getDogFetch = (breedId) => {
    setLoading(true)
    getDog(breedId).then((data) => {
      setDog(data);
      
      setLoading(false);
    }).catch((error)=>{
      console.log(error)
      setError("Error al cargar un perro")
      setLoading(false);
    })
  };

  useEffect(() => {
    getDogFetch();
  }, []);

  return (
    <div className="App">
      <SelectElemet getDogFetch={getDogFetch} dog={dog}></SelectElemet>
      {error && <Error error={error}></Error>}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Cards dog={dog} getDogFetch={getDogFetch}></Cards>
      )}
    </div>
  );
}

export default App;
