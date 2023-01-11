import React, { useEffect, useState, useRef } from "react";
import Header from "./Header/Header";
import Heading from "./Heading/Heading";
import Card from "./Card/Card";
import Footer from "./Footer/Footer";
import styles from './App.module.scss';
import { motion } from 'framer-motion';
 

const App = () => {
  const [data, setData] = useState([]);  
  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    const fetchedData = async () => {
      const result = await fetch("./data.json")
        .then((res) => res.json())
        .then((res) => setData(res.items));
    };
    fetchedData();
    
    setWidth(800)
  }, []);


  return (
    <div className={styles.container}>
      <Header></Header>
      <Heading></Heading>
      <div className={styles['card-container']}>
        <motion.div className={styles.carousel} drag="x" dragConstraints={{right: 0, left: -width}} ref={carousel} whileTap={{cursor: 'grabbing'}}>
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
          </motion.div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
