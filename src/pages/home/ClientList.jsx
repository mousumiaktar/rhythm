import Reviews from './Reviews';

const ClientList = () => {
    return (
        <div className='container mx-auto mt-16'>
            <h2 className='text-center font-light py-4 shadow-2xl rounded-lg'>We Have A Great Client List in The Showcase</h2>
            <div className='bg-white p-8 rounded-2xl shadow-xl mt-8'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                    <div className='flex justify-center border-2 border-gray-300 rounded-lg'>
                        <img className='w-[160px] h-[160px]' src="https://i.ibb.co/ygmpSbN/Fun-Moji-logo.webp" alt="" />
                    </div>
                    <div className='flex justify-center border-2 border-gray-300 rounded-lg'>
                        <img className='w-[160px] h-[160px]' src="https://i.ibb.co/ZmGLmPq/Babu-Bhai-Production-logo.webp" alt="" />
                    </div>
                    <div className='flex justify-center border-2 border-gray-300 rounded-lg'>
                        <img className='w-[160px] h-[160px]' src="https://i.ibb.co/fHhC3cs/Sri-Purushottam.webp" alt="" />
                    </div>
                    <div className='flex justify-center border-2 border-gray-300 rounded-lg'>
                        <img className='w-[160px] h-[160px]' src="https://i.ibb.co/pv0X9cH/Sri-Sathya-Sai-Baba.webp" alt="" />
                    </div>

                    <div className='flex justify-center border-2 border-gray-300 rounded-lg'>
                        <img className='w-[160px] h-[160px]' src="https://i.ibb.co/HDFwZG1/Ptf-Studio-Logo.webp" alt="" />
                    </div>
                    <div className='flex justify-center border-2 border-gray-300 rounded-lg'>
                        <img className='w-[160px] h-[160px]' src="https://i.ibb.co/2dmdx10/Radio-Raabta-90-8-FM-logo.webp" alt="" />
                    </div>
                    <div className='flex justify-center items-center border-2 border-gray-300 rounded-lg'>
                        <img className='w-[100px] h-[100px]' src="https://i.ibb.co/bQCWG2d/Swadu-staff-films-logo.webp" alt="" />
                    </div>
                    <div className='flex justify-center border-2 border-gray-300 rounded-lg'>
                        <img className='w-[160px] h-[160px]' src="https://i.ibb.co/wKKyWgY/odishaR.webp" alt="" />
                    </div>

                    <div className='flex justify-center border-2 border-gray-300 rounded-lg'>
                        <img className='w-[160px] h-[160px]' src="https://i.ibb.co/0YLBCgv/Untitled-design.webp" alt="" />
                    </div>

                    <div className='flex justify-center border-2 border-gray-300 rounded-lg'>
                        <img className='w-[160px] h-[160px]' src="https://i.ibb.co/VDD5Nxd/Sita-Mahli.webp" alt="" />
                    </div>
                    <div className='flex justify-center border-2 border-gray-300 rounded-lg'>
                        <img className='w-[160px] h-[160px]' src="https://i.ibb.co/T2LC5Hc/hk-procutoin-label-logo.webp" alt="" />
                    </div>
                    <div className='flex justify-center border-2 border-gray-300 rounded-lg'>
                        <img className='w-[160px] h-[160px]' src="https://i.ibb.co/XY3s3kM/Shin-Music-logo.webp" alt="" />
                    </div>

                    <div className='flex justify-center items-center border-2 border-gray-300 rounded-lg'>
                        <img className='w-[100px] h-[100px]' src="https://i.ibb.co/60HtMbK/GMC-Music-logo.webp" alt="" />
                    </div>
                    <div className='flex justify-center items-center border-2 border-gray-300 rounded-lg'>
                        <img className='w-[100px] h-[100px]' src="https://i.ibb.co/SQSQqbf/SRUSTI-MUSIC-Logo-1.webp" alt="" />
                    </div>
                    <div className='flex justify-center border-2 border-gray-300 rounded-lg'>
                        <img className='w-[160px] h-[160px]' src="https://i.ibb.co/ZMRC8Qb/Creative-Vision.webp" alt="" />
                    </div>
                    <div className='flex justify-center border-2 border-gray-300 rounded-lg'>
                        <img className='w-[160px] h-[160px]' src="https://i.ibb.co/pLr84f2/Magadh-Music.webp" alt="" />
                    </div>
                </div>
                <Reviews />
            </div>
        </div>
    );
};

export default ClientList;