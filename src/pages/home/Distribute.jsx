import { FaCloudUploadAlt } from "react-icons/fa";

const Distribute = () => {
    return (
        <div className='container mx-auto pb-5'>
            <div className='mt-16'>
                <h1 className='text-center font-semibold'>DISTRIBUTE YOUR MUSIC WORLDWIDE</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
                    {/* CARD ONE */}
                    <div className='text-center bg-white shadow-lg py-6 px-4 hover-shadow-xl hover:border border-green-500 hover:duration-400'>
                        <div className='flex justify-center'>
                            <FaCloudUploadAlt className='text-gray-400 hover:text-green-500' size={35} />
                        </div>
                        <div className='mt-8'>
                            <h4 className='font-semibold'>Upload Your Music</h4>
                            <p className='mt-3 text-base text-gray-500'>Get Your Own CMS And Upload your tracks, artwork, and song information to our CMS. And get live your track only in 72 hours with our super fast Approval Time</p>
                        </div>
                    </div>
                    {/* CARD TWO */}
                    <div className='text-center bg-white shadow-lg py-6 px-4 hover-shadow-xl hover:border border-green-500'>
                        <div className='flex justify-center'>
                            <FaCloudUploadAlt className='text-gray-400 hover:text-green-500' size={35} />
                        </div>
                        <div className='mt-8'>
                            <h4 className='font-semibold'>Live All Stores & Caller Tune</h4>
                            <p className='mt-3 text-base text-gray-500'>Get LIve Music On Gaana, JioSaavan, Wynk, Spotify, Apple Music, iTunes, and 150+ More streaming Platform. Get Caller Tunes - Airtel, Jio, VI, BSNL, etc.</p>
                        </div>
                    </div>
                    {/* CARD THREE */}
                    <div className='text-center bg-white shadow-lg py-6 px-4 hover-shadow-xl hover:border border-green-500'>
                        <div className='flex justify-center'>
                            <FaCloudUploadAlt className='text-gray-400 hover:text-green-500' size={35} />
                        </div>
                        <div className='mt-8'>
                            <h4 className='font-semibold'>You Get Paid</h4>
                            <p className='mt-3 text-base text-gray-500'>your music play on any Store or music download on Any Platform. You will get your payment directly into your Bank account. No Payment Threshold limit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Distribute;