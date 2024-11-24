import CartTable from '@/components/CartTable';

export const metadata = {
    title: 'Cart - We5ive',
    description: 'Explore the latest Fashion Products.'
};

const Cart = () => {

    return (
        <div className='container mx-auto p-5 min-h-[60vh]'>
            {/* Table */}
            <CartTable />
        </div>
    );
};

export default Cart;