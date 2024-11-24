import { decrementQuantity, incrementQuantity, incrementQuantityByNumber, removeFromCart } from '@/app/features/cartSlice';
import { useAppDispatch } from '@/lib/hooks';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { FaDeleteLeft } from "react-icons/fa6";

const CartItems = ({ product }) => {
    const totalPrice = (product.price * product.quantity).toFixed(2);
    const dispatch = useAppDispatch();
    const handleQuantityByAmount = (e) => {
        const value = e.target.value;
        const newQuantity = value === '' ? ' ' : parseInt(value);

        dispatch(incrementQuantityByNumber({ id: product.id, quantity: newQuantity }));
    };

    const handleRemoveProduct = (id) => {
        const confirmation = window.confirm('Do you want to Remove Item?');

        if (confirmation) {
            dispatch(removeFromCart(id));
            toast.success('Product removed from Cart.');
        }
    };
    return (
        <tr className="border-b border-opacity-20 border-gray-300 bg-gray-100">
            <td className="p-3">
                <Image src={product.thumbnail} alt={product.title} width={48} height={48} className='w-12 h-12' />
            </td>
            <td className="p-3">
                <p>{product.title}</p>
            </td>
            <td className="p-3">
                <p>$ {product.price}</p>
            </td>
            <td className="p-3 text-center">
                <div className='flex items-center gap-2 justify-center'>
                    <button onClick={() => dispatch(decrementQuantity(product.id))}><FaMinus className='h-3 w-2' /></button>
                    <input
                        type="text"
                        value={product.quantity}
                        className='bg-white w-8 h-6 text-center border border-gray-300 rounded focus:outline-none'
                        onChange={(e) => handleQuantityByAmount(e)}
                    />
                    <button onClick={() => dispatch(incrementQuantity(product.id))}><FaPlus className='h-3 w-2' /></button>
                </div>
            </td>
            <td className="p-3 text-center">
                <p>$ {totalPrice}</p>
            </td>
            <td className="p-3 font-semibold text-center">
                <button onClick={() => handleRemoveProduct(product.id)}>
                    <FaDeleteLeft className='w-6 h-6 text-red-400' />
                </button>
            </td>
        </tr>
    );
};

export default CartItems;