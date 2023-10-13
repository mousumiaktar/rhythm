import { FaCheck } from 'react-icons/fa';

const Featured = () => {
    return (
        <div className='bg-[#1E2B4B] py-4 mt-8'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h3 className='font-bold text-white '>Featured For independent labels</h3>
                    <div className='flex justify-center'>
                        <div className='w-28 border-dashed border-2 border-red-600 mt-2'></div>
                    </div>
                    <div className=' text-white text-base mt-4'>
                        <p className='flex justify-center gap-2 items-center'>
                            <FaCheck />
                            Fastest Approval Time
                        </p>
                        <p className='flex justify-center gap-2 items-center'>
                            <FaCheck />
                            Free ISRC and UPC code
                        </p>
                        <p className='flex justify-center gap-2 items-center'>
                            <FaCheck />
                            Unlimited Forever Releases
                        </p>
                        <p className='flex justify-center gap-2 items-center'>
                            <FaCheck />
                            Unlimited Custom Caller Tune
                        </p>
                        <p className='flex justify-center gap-2 items-center'>
                            <FaCheck />
                            Custom Record Label Get Your Custom C and P Line
                        </p>
                        <p className='flex justify-center gap-2 items-center'>
                            <FaCheck />
                            Previously released song, accepted for Custom Caller Tune
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;