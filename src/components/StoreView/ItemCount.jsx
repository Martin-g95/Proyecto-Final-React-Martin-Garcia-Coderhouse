import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../cart/CartContext";

const ItemCount = ({cambioDeStock, producto}) => {

    const [cantidad, setCantidad] = useState(1);
    const {addToCart} = useContext(CartContext)

    const aumentar = () => {
        if (cantidad < producto.stock) {
            setCantidad(cantidadAnterior => cantidadAnterior + 1);
        } else {
            console.log('Has alcanzado el límite del stock disponible para este producto.');
        }
    }

    const disminuir = () => {

        if(cantidad > 1) {
            setCantidad(cantidadAnterior => cantidadAnterior -1);
        }
    }

    const agregar = () => {


        if (producto.stock > 0) {
            const productoComprado = {
                id: producto.id,
                imagen: producto.image,
                nombre: producto.title,
                precio: producto.price,
                cantidad: cantidad,
                stock: producto.stock
            };
            
            console.log(productoComprado.stock);
            addToCart(productoComprado)
            cambioDeStock(cantidad,productoComprado);
            setCantidad(1); // resetea la cantidad a 1 después de agregar
        } else {
            console.log('No hay más stock disponible para este producto.');
        }
    }


    return (
    <>
    <div className="flex justify-center space-x-4 mb-5">
        <button onClick={disminuir} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            -
        </button>
        <p className="mt-2">{cantidad}</p>
        <button onClick={aumentar} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        +
        </button>
    </div>
    <div className="flex justify-center space-x-10 mt-10 mb-5">
    <button onClick={agregar} className="inline-block bg-gray-400 hover:bg-red-700 rounded-full px-4 py-3 text-sm font-bold text-gray-700 mr-2 mb-5">Agregar</button>


    <Link to="/cart">
        <button className="inline-block bg-gray-400 hover:bg-cyan-700 rounded-full px-4 py-3 text-sm font-bold  text-gray-700 mr-2 mb-5">Terminar mi compra.
        </button>
    </Link>
    </div>
    
    </>
    
)
}

export default ItemCount