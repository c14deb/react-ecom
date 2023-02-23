import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import axios from "axios"

const FeaturedProducts = ({ type }) => {
  
  const [ data, setData ] = useState([])

  useEffect (()=>{
    const fetchData = async () =>{
      try {
        const res = await axios.get
        (process.env.REACT_APP_API_URL + "/products",
        {
          headers: {
            Authorization: "bearer" + process.env.REACT_APP_API_TOKEN,
          },
        });
        // console.log(data);
        setData(res.data.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData()
  }, []);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          excepturi commodi delectus architecto est asperiores sit recusandae
          pariatur explicabo facere in assumenda, dolorum sapiente! Placeat sint
          delectus ipsam modi nemo!
        </p>
      </div>
      <div className="bottom">
        {data.map(item => (
            <Card item = {item} key={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
