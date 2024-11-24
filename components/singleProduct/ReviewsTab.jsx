import { Progress } from "@/components/ui/progress";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import ReviewIcons from '../ReviewIcons';
import ReviewDetails from './ReviewDetails';


const ReviewsTab = ({ product }) => {

    const statsData = [
        { rating: '5', total: '50' },
        { rating: '4', total: '35' },
        { rating: '3', total: '42' },
        { rating: '2', total: '18' },
        { rating: '1', total: '9' },
    ];
    return (
        <div className='w-full flex flex-col-reverse md:flex-row gap-6'>
            {/* Reviews Details */}
            <div className='w-full md:w-2/3'>
                <Select>
                    <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="oldest">Oldest</SelectItem>
                    </SelectContent>
                </Select>
                <div>
                    {
                        product.reviews.map((review, index) => <ReviewDetails
                            key={index}
                            review={review}
                        />)
                    }
                </div>
            </div>
            {/* Reviews Stats */}
            <div className='w-full md:w-[30%] flex flex-col gap-4'>
                <h5 className='font-semibold'>Product Review <span className='font-normal text-primary ml-2'>158 reviews</span></h5>
                <div className='flex items-center justify-between'>
                    <ReviewIcons />
                    <p className='text-base font-semibold'>(4.3)</p>
                </div>
                {/* Review Stats based on given rating */}
                <div>
                    {
                        statsData.map((stats, index) => <div key={index} className='flex items-center gap-2'>
                            <p>{stats.rating}</p>
                            <Progress value={stats.total} className='bg-[#DFDFDF]' />
                            <p>{stats.total}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ReviewsTab;