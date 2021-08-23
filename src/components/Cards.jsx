import React from "react";

const Cards = ({ dog, getDogFetch }) => {
  console.log(dog.breeds.id);
  return (
    <form onClick={() => getDogFetch(dog.breeds.id)}>
      <div className="cards bounce">
        <div>
          <img src={dog.img} alt="Italian Trulli"></img>
        </div>
        <span>{dog.breeds.name}</span>
      </div>
    </form>
  );
};

export default Cards;
