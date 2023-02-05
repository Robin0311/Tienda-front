import Carruselv2 from "../shared/Carruselv2";

const Body = () => {
    return (
        <>
        <div className="card">
        <img 
        className="product--image"
        src="https://i.pinimg.com/736x/c5/b8/54/c5b854280a9a900a4952810c8156497e.jpg" 
        alt="product img"/>
      </div>
      <div>
      <h1>Catalogo de productos</h1>

    <Carruselv2 />
    </div>
    </>
    )
}

export default Body
