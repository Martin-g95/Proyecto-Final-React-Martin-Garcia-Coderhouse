import React, { useEffect, useState } from 'react'
import { getCategory } from '../../asyncMock'
import ItemCardComponent from './ItemCardComponent';
import { useParams } from 'react-router-dom';

const ItemCategoryContainer = () => {
  const { category } = useParams();
  
  const [productos, setProductos] = useState([]);

  
  useEffect(() => {
    getCategory(category).then((result) => {
      setProductos(result);
    });
  }, [category]);



  return (

    <div className="container containerList rounded-r gap-5">
          <>
            {productos.map((productos) => (
            <ItemCardComponent 
            key={productos.id}
            id={productos.id}
            title={productos.title}
            price={productos.price}
            image={productos.image}
            description={productos.description}
            />
      ))}
    </>
    </div>
  )
}

export default ItemCategoryContainer