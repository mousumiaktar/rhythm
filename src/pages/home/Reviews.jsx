import { AiFillStar } from 'react-icons/ai';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Reviews = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='mt-5'>
            <div>
                <h4 className='font-semibold text-center'>Excellent</h4>
                <div className='flex justify-center'>
                    <div className='flex gap-2'>
                        <AiFillStar className='text-yellow-500' size={25} />
                        <AiFillStar className='text-yellow-500' size={25} />
                        <AiFillStar className='text-yellow-500' size={25} />
                        <AiFillStar className='text-yellow-500' size={25} />
                        <AiFillStar className='text-yellow-500' size={25} />
                    </div>
                </div>
                <p className='text-center'>Based on <span className='font-bold'>28 reviews</span></p>
                <div className='flex justify-center'>
                    <img className='h-10' src="https://cdn.trustindex.io/assets/platform/Google/logo.svg" alt="" />
                </div>
            </div>
            {/* MAIN CONTENT */}
            <div className='mt-3' >
                <Carousel responsive={responsive}>
                    <div className='bg-[#EFEFEF] p-2 mx-2'>
                        <div className='flex gap-2'>
                            <img className='h-8' src="https://i.ibb.co/tBtdp4g/unnamed.png" alt="" />
                            <div>
                                <p className='font-bold'>The Pawsitive Effects</p>
                                <p className='text-xs text-gray-500'>17 june, 2021</p>
                            </div>
                        </div>
                        <div className='flex gap-2 mb-2'>
                            <AiFillStar className='text-yellow-500' size={20} />
                            <AiFillStar className='text-yellow-500' size={20} />
                            <AiFillStar className='text-yellow-500' size={20} />
                            <AiFillStar className='text-yellow-500' size={20} />
                            <AiFillStar className='text-yellow-500' size={20} />
                        </div>
                        <p>Amazing budget service with instant response. But I must say that The Black Turn platform helped me a lot to generate my first revenue.</p>
                    </div>
                    <div className='bg-[#EFEFEF] p-2 mx-2'>
                        <div className='flex gap-2'>
                            <img className='h-8' src="https://i.ibb.co/tBtdp4g/unnamed.png" alt="" />
                            <div>
                                <p className='font-bold'>The Pawsitive Effects</p>
                                <p className='text-xs text-gray-500'>17 june, 2021</p>
                            </div>
                        </div>
                        <div className='flex gap-2 mb-2'>
                            <AiFillStar className='text-yellow-500' size={20} />
                            <AiFillStar className='text-yellow-500' size={20} />
                            <AiFillStar className='text-yellow-500' size={20} />
                            <AiFillStar className='text-yellow-500' size={20} />
                            <AiFillStar className='text-yellow-500' size={20} />
                        </div>
                        <p>Amazing budget service with instant response. But I must say that The Black Turn platform helped me a lot to generate my first revenue.</p>
                    </div>
                    <div className='bg-[#EFEFEF] p-2 mx-2'>
                        <div className='flex gap-2'>
                            <img className='h-8' src="https://i.ibb.co/tBtdp4g/unnamed.png" alt="" />
                            <div>
                                <p className='font-bold'>The Pawsitive Effects</p>
                                <p className='text-xs text-gray-500'>17 june, 2021</p>
                            </div>
                        </div>
                        <div className='flex gap-2 mb-2'>
                            <AiFillStar className='text-yellow-500' size={20} />
                            <AiFillStar className='text-yellow-500' size={20} />
                            <AiFillStar className='text-yellow-500' size={20} />
                            <AiFillStar className='text-yellow-500' size={20} />
                            <AiFillStar className='text-yellow-500' size={20} />
                        </div>
                        <p>Amazing budget service with instant response. But I must say that The Black Turn platform helped me a lot to generate my first revenue.</p>
                    </div>
                    <div className='bg-[#EFEFEF] p-2 mx-2'>
                        <div className='flex gap-2'>
                            <img className='h-8' src="https://i.ibb.co/tBtdp4g/unnamed.png" alt="" />
                            <div>
                                <p className='font-bold'>The Pawsitive Effects</p>
                                <p className='text-xs text-gray-500'>17 june, 2021</p>
                            </div>
                        </div>
                        <div className='flex gap-2 mb-2'>
                            <AiFillStar className='text-yellow-500' size={20} />
                            <AiFillStar className='text-yellow-500' size={20} />
                            <AiFillStar className='text-yellow-500' size={20} />
                            <AiFillStar className='text-yellow-500' size={20} />
                            <AiFillStar className='text-yellow-500' size={20} />
                        </div>
                        <p>Amazing budget service with instant response. But I must say that The Black Turn platform helped me a lot to generate my first revenue.</p>
                    </div>
                </Carousel>;
            </div>
        </div>
    );
};

export default Reviews;