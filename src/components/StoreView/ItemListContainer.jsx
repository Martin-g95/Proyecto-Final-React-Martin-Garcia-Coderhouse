

import "./ItemListContainer.css"
import { getProducts } from "../../asyncMock"
import { useEffect, useState } from "react"
import ItemCardComponent from "./ItemCardComponent";



const ItemListContainer = ({greetings}) => {

  const [productos, setProductos] =useState([]);

useEffect(()=>{
  getProducts.then((datos) => setProductos(datos));
}, []);

  return (
    <div className="container containerList rounded-r gap-5">{greetings}
          <>
            {productos.map((producto) => (
            <ItemCardComponent 
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            image={producto.image}
            description={producto.description}
            />
      ))}
    </>
    </div>
    
  )
}

export default ItemListContainer