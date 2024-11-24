import Link from 'next/link';

const ProductSizeColor = ({ searchParams }) => {
    const selectedColor = searchParams.color || 'black';
    const selectedSize = searchParams.size || 'm';

    const sizes = ['s', 'm', 'l', 'xl'];
    const colors = ['white', 'black'];
    return (
        <div className='flex gap-4 md:gap-[170px] justify-between md:justify-start'>
            <div>
                <p className='text-base md:text-[19px] font-semibold'>Available Size</p>
                <div className='flex gap-2 mt-2 md:mt-4'>
                    {
                        sizes.map((size, index) => <Link
                            href={`?size=${size}&color=${selectedColor}`}
                            key={index}
                            className={`text-center uppercase rounded-lg border border-primary py-1 w-8 ${selectedSize === size ? 'bg-primary text-white' : 'bg-[#ECE9FE] text-accent'}`}
                        >{size}</Link>)
                    }
                </div>
            </div>
            <hr className='bg-[#CECECE] w-full my-4 block md:hidden' />
            <div>
                <p className='text-base md:text-[19px] font-semibold'>Available Colors</p>
                <div className="flex gap-2 mt-2 md:mt-4">
                    {colors.map((color, index) => (
                        <Link
                            href={`?size=${selectedSize}&color=${color}`}
                            key={index}
                            className="flex items-center gap-2 capitalize"
                        >
                            <div className={`${selectedColor === color && 'border-2 border-primary p-[2px] rounded-full'}`}>
                                <div className={`w-4 h-4 rounded-full ${color === 'white' ? 'bg-white' : 'bg-black'}`}></div>
                            </div>
                            {color}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductSizeColor;