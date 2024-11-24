import { FaRegStar, FaStar } from 'react-icons/fa';

const ReviewIcons = () => {
    return (
        <div className='text-[#FFC700] flex items-center gap-1'>
            {
                Array.from({ length: 3 }).map((_, index) => <FaStar key={index} className='h-4 w-4' />)
            }
            {
                Array.from({ length: 2 }).map((_, index) => <FaRegStar key={index} className='h-4 w-4' />)
            }
        </div>
    );
};

export default ReviewIcons;