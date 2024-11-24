import { GrPowerCycle } from "react-icons/gr";
import { MdOutlinePayments } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const HeroFeatures = () => {
    return (
        <div className='flex items-center justify-center w-full h-auto md:h-20 p-4 bg-primary bg-opacity-80 absolute bottom-0 text-white font-manrope'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-between'>
                {/* Delivery */}
                <div className='flex items-start gap-4'>
                    <TbTruckDelivery className='w-8 h-8' />
                    <div>
                        <h5 className='md:text-xl uppercase font-semibold'>Free Shipping</h5>
                        <p className='text-xs md:text-sm uppercase'>Buy BDT 3000+ & get free delivery</p>
                    </div>
                </div>
                {/* Exchange */}
                <div className='flex items-start gap-4'>
                    <GrPowerCycle className='w-8 h-8' />
                    <div>
                        <h5 className='md:text-xl uppercase font-semibold'>7 DAYS EXCHANGE</h5>
                        <p className='text-sx md:text-sm uppercase '>EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS</p>
                    </div>
                </div>
                {/* Payment */}
                <div className='flex items-start gap-4'>
                    <MdOutlinePayments className='w-8 h-8' />
                    <div>
                        <h5 className='md:text-xl uppercase font-semibold'>100% PAYMENT SECURE</h5>
                        <p className='text-xs md:text-sm uppercase '>CASH ON DELIVERY AND SECURED ONLINE PAYMENT</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroFeatures;