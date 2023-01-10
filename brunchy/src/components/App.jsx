import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Heading from "./Heading/Heading";
import Card from "./Card/Card";
import Footer from "./Footer/Footer";
import styles from './App.module.scss';

const App = () => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const fetchedData = async () => {
      const result = await fetch("./data.json")
        .then((res) => res.json())
        .then((res) => setData(res.items));
    };
    fetchedData();
  }, []);

  console.log(data);
  return (
    <div className={styles.container}>
      <Header></Header>
      <Heading></Heading>
      <div className={styles['card-container']}>
      {data.map((arr) => {
        return (
          <Card
            name={arr.name}
            description={arr.caption}
            price={arr.price}
            image={arr.image}
            key={arr.name}
          ></Card>
        );
      })}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
