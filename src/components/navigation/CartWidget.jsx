import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const CartWidget = () => {
  return (
    <button className="relative bg-blue-500 text-white w-12 h-12 rounded-full">
      <ShoppingCartIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6"/>
      <span className="absolute top-0 right-0 bg-red-500 rounded-full text-white text-xs w-5 h-5 flex items-center justify-center">4</span>
    </button>
  );
}

export default CartWidget;
