// import { collection, onSnapshot, query } from "firebase/firestore";
// import { useEffect, useState } from "react";

import Carousel from "react-bootstrap/Carousel";
// import { db } from "./../../components/config/firebase";

const Carrusel = () => {
    // const [newsSite, setNewsSite] = useState([]);

    // useEffect(() => {
    //   const q = query(collection(db, "itemsCarrusel"));
    //   onSnapshot(q, (querySnapshot) => {
    //     setNewsSite(
    //       querySnapshot.docs.map((item) => ({
    //         id: item.id,
    //         data: item.data(),
    //       }))
    //     );
    //   });
    // }, []);
  
  return(
    
    // <Carousel className="carousel-page">
    //   {newsSite.map((items) => (
    //     <Carousel.Item>
    //       <img className="d-block" src={items.data.img} alt="First slide" />
    //       <Carousel.Caption>
    //         <h3 className="Descripcion" >{items.data.title}</h3>
    //         <p>{items.data.description}</p>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //   ))}
    // </Carousel>

    <Carousel className="carousel-page">
      <Carousel.Item>
        <img
          className="mx-auto d-block"
          style={{ height: 400}}
          src="https://i.pinimg.com/564x/e1/8f/48/e18f4891fa70181ac19da9219f674489.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Charizard</h3>
          <p>Pokemon de fuego</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="mx-auto d-block"
          style={{ height: 400}}
          src="https://i.pinimg.com/564x/65/b1/b8/65b1b8b7a9c55d018eb94f81f5bb22cf.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="mx-auto d-block"
          style={{ height: 400}}
          src="https://i.pinimg.com/564x/fc/29/30/fc2930793fdf82dbf60d8863ec7b4712.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrusel;
