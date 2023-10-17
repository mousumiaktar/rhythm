import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Download = () => {
    return (
        <div className='bg-gradient-to-l from-[#604AF7] to-[#8857EB] pt-4 pb-24 mt-16'>
            <div className='container mx-auto'>
                <h3 className='font-bold text-center text-white'>Download the app</h3>
                <p className='text-xl text-center text-white mt-4'>Music Distribution India – The Black Turn</p>
                <div className='flex justify-center'>
                    <div className='md:flex items-center gap-8 mt-16'>
                        <div className='flex gap-2 border-2 border-white px-4 rounded hover:cursor-pointer'>
                            <FaGooglePlay className='mt-2 text-white' size={20} />
                            <p className='mt-2 text-white'>Google Play</p>
                        </div>
                        <div className='flex gap-2 border-2 border-white px-4 rounded hover:cursor-pointer'>
                            <FaApple size={20} className='mt-2 text-white' />
                            <p className='mt-2 text-white'>App Store (Comming Soon)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Download;