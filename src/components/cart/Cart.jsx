import React, { useContext } from 'react';
import { CartContext } from '../cart/CartContext';

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    const handleRemove = (productId) => {
        removeFromCart(productId);
    };

     // Calcula el subtotal
     const subtotal = cart.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
     // Si tienes impuestos o costos de envío, agrégalos aquí
     const impuestos = subtotal * 0.10; // Ejemplo: 10% de impuestos
     const envio = 5.00; // Ejemplo: costo de envío fijo
     const total = subtotal + impuestos + envio;


    return (
        <>
        <div className="bg-gray-100 h-screen py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-semibold mb-4">Tus objetos!</h1>
                
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-3/4">
                        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="text-left font-semibold">Producto</th>
                                        <th className="text-left font-semibold">Precio</th>
                                        <th className="text-left font-semibold">Cantidad</th>
                                        <th className="text-left font-semibold">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item, index) => (
                                        <tr key={index}>
                                            <td className="py-4">
                                                <div className="flex items-center">
                                                    <img className="h-16 w-16 mr-4" src={item.imagen} alt={item.nombre} />
                                                    <span className="font-semibold">{item.nombre}</span>
                                                </div>
                                            </td>
                                            <td className="py-4">{item.precio}</td>
                                            <td className="py-4">{item.cantidad}</td>
                                            <td className="py-4">
                                                <button 
                                                    onClick={() => handleRemove(item.id)} 
                                                    className='bg-black text-white rounded-md py-2 px-4'>
                                                    X
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="md:w-1/4">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Tu compra</h2>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Impuestos</span>
                        <span>${impuestos.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Envio</span>
                        <span>${envio.toFixed(2)}</span>
                    </div>
                    <hr className="my-2"/>
                    <div className="flex justify-between mb-2">
                        <span className="font-semibold">Total</span>
                        <span className="font-semibold">${total.toFixed(2)}</span>
                    </div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Comprar</button>
                </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
    
}
export default Cart;
