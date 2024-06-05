

import React from 'react'
import { useParams } from 'react-router-dom';
import { getProduct } from '../../asyncMock';
import { useState, useEffect } from 'react';
import ItemCount from './ItemCount';


const ItemSingleDetail = () => {

const [productos, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const result = getProduct(Number(id));
    setProduct(result);
  }, [id]);



 

const [sinStock, setSinStock] = useState(false);

    const cambiarStockItem = (cantidadComprada) => {
        if (productos.stock >= cantidadComprada) {
            setProduct({...productos, stock: productos.stock - cantidadComprada});
            if (productos.stock - cantidadComprada === 0) {
                setSinStock(true);
            }
        } else {
            console.log('No hay suficiente stock');
        }
    }



return (
    <>
    <section className="flex justify-center items-center mt-[50px]" >
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={productos.image} alt="Sunset in the mountains"/>
    <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{productos.title}</div>
        <p className="text-gray-700 text-base">
    {productos.description}
    </p>
    </div>
        <div className="px-6 pt-4 pb-5">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ID: {id}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-5">Precio:{productos.price}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-5">Categoria:{productos.category}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-5">Stock: {productos.stock}</span>
            {sinStock && <p className="text-red-500 ml-12 mb-5">No hay más productos disponibles.</p>}
            {productos && <ItemCount cambioDeStock={cambiarStockItem} producto={productos} />}

        </div>
    </div>
    </section>
    </>
    )
}

export default ItemSingleDetail