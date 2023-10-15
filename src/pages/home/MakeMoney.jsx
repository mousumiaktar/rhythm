const MakeMoney = () => {
    return (
        <div className='bg-[#1E2B4B] relative mt-16 h-[750px] md:h-[500px] pt-8'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-white px-10'>
                    <div>
                        <p className='text-2xl font-semibold mt-2'>Make money with worldwide music distribution</p>
                        <h1 className='font-bold'>150+ Stores</h1>
                        <div className='w-16 h-[2px] border-dashed border-2 border-red-600'></div>
                        <p className='text-base leading-7 mt-8'>Digital Music Distribution could be a powerful and straightforward benefit we offer to induce your music online so that the world can listen to it. Identity Music gives quality music dispersion administrations to autonomous craftsmen and record names around the globe. Start today and Earn Monthly</p>
                        <div className='flex justify-end'>
                            <button className='py-1 px-3 border-1 border-green-600 rounded-lg'>Join</button>
                        </div>
                    </div>
                    <div className='mt-12 md:mt-12'>
                        {/* <div className='bg-white h-[290px] md:h-[310px] w-[290px] md:w-[310px] lg:w-[525px]'></div> */}
                        <img className='absolutemt-[-280px] md:mt-[-20px] ml-2 lg:ml-2 border-8 border-white' src="https://i0.wp.com/theblackturn.com/wp-content/uploads/2021/03/music.jpg?w=1182&ssl=1" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeMoney;