const MobileOperator = () => {
    return (
        <div className='bg-[#1E2B4B] relative mt-40  md:h-[620px] h-[500px] pt-8'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-white px-10'>
                    <div className='mt-12 md:mt-12 order-2 md:order-1'>
                        <div className=''>
                            <img className='absolute mt-[-50px] md:mt-[-20px]   h-[300px] md:[500px] lg:h-[600px] border-8 border-white' src="https://i0.wp.com/theblackturn.com/wp-content/uploads/2021/03/2x-no-mark-1.jpg?resize=770%2C1024&ssl=1" alt="" />
                        </div>
                    </div>
                    <div className='md:ml-4 order-1 md:order-2'>
                        <p className='text-2xl font-semibold mt-2'>Caller Tune Distribution India </p>
                        <h1 className='font-bold'>Mobile Operator Licensing</h1>
                        <div className='w-16 h-[2px] border-dashed border-2 border-red-600 mt-3'></div>
                        <p className='lg:text-base leading-7 mt-3 lg:mt-8'>Reach Indian fans and make your music available for Indian fans to caller tune. Set Your Favorite Part Of Your Song As Your Caller Tune From - JIOSAAVN, WYNK & Vi(Vodafone & Idea), BSNL Etc. Get CRBT Codes For Caller Tune. Licensing on VAS such as CRBT, IVR & WAP. Previously released song accepted, a full song on JioSaavn and Wynk mandatory (if not we upload first on Wynk and JioSaavn and distribute for caller tune). We dont charge a yearly fee, the song is available for caller tune as a lifetime</p>
                        <div className='flex justify-end'>
                            <button className='py-1 px-3 border-1 border-green-600 rounded-lg'>Join</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileOperator;