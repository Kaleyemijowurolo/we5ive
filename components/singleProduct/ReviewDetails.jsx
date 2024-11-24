import reviewer from '@/app/assests/reviewer.png';
import Image from 'next/image';
import { FaRegThumbsUp } from "react-icons/fa6";
import ReviewIcons from '../ReviewIcons';

const ReviewDetails = ({ review }) => {
    const days = Math.floor(Math.random() * (20 - 3 + 1)) + 3;
    const likes = Math.floor(Math.random() * (900 - 15 + 1)) + 15;
    return (
        <div className='border-b border-dashed border-accent'>
            {/* Reviewer Info */}
            <div className='flex items-start gap-2 mt-6'>
                <Image src={reviewer} alt={review.reviewerName} width={40} height={40} />
                <div>
                    <h5 className='text-base font-semibold mb-2'>{review.reviewerName} <span className='text-[13px] font-normal ml-2'>{days} days ago</span></h5>
                    <ReviewIcons />
                </div>
            </div>
            {/* Review Info */}
            <div className='flex flex-col gap-4 my-4'>
                <h5 className='text-base font-semibold'>{review.comment}</h5>
                <p className='flex items-center gap-1'>
                    <FaRegThumbsUp />
                    {likes}
                </p>
            </div>
        </div>
    );
};

export default ReviewDetails;