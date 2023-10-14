import { BsCheckLg } from 'react-icons/bs';

const Plans = () => {
    return (
        <div className='container mx-auto mt-16 pb-4'>
            <div className='flex justify-center mb-8'>
                <div>
                    <h3 className='font-semibold mb-2'>Music Distribution Plans</h3>
                    <div className='flex justify-center'>
                        <div className='w-16 border-dashed border-2 border-red-600'></div>
                    </div>
                </div>
            </div>
            {/* PLANS */}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {/* First CARD */}
                <div className='bg-white shadow-md pt-3 pb-3 md:pb-3 lg:pb-0 px-10 lg:h-[600px]'>
                    <p className='text-xl font-light'>Single Song All Stores + Caller Tune</p>
                    <div className='flex items-center'>
                        <span className='font-bold text-xl'>₹</span>
                        <h1 className='font-bold'>799</h1>
                    </div>
                    <p className='text-sm text-gray-500'>Per User /song</p>
                    <div className='text-normal'>
                        <p className='font-semibold text-gray-500'>Features</p>
                        <div>
                            <p className='flex items-center gap-2'>
                                <BsCheckLg />
                                All Music Live Stream Platforms
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsCheckLg />
                                Caller Tune Facility
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsCheckLg />
                                Song Availability Lifetime
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsCheckLg />
                                95% Royalties
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsCheckLg />
                                4 Monthly Payment / Report
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsCheckLg />
                                24 Hour Approval
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsCheckLg />
                                YouTube Content ID
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsCheckLg />
                                No Per Year Charges
                            </p>
                        </div>
                        <button className='py-2 px-3 text-white bg-[#E2498A] rounded-md hover:bg-[#562DD4] mt-2'>UPLOAD NOW</button>
                    </div>
                </div>
                {/* Second CADRD */}
                <div className='bg-gradient-to-t from-[#3C9FE2] to-[#35BFC9] shadow-md lg:h-[650px] pt-3 px-10 pb-3 md:pb-3 lg:pb-0'>
                    <p className='text-xl font-light mb-3 text-white'>Custom Label
                        All Stores + Caller Tune</p>
                    <div className='flex items-center text-white'>
                        <span className='font-bold text-xl'>₹</span>
                        <h1 className='font-bold'>4,999</h1>
                    </div>
                    <p className='text-sm text-white'>Per Year /-</p>
                    <div className='text-normal'>
                        <p className='font-semibold text-white mt-5'>Features</p>
                        <div className='text-white'>
                            <p className='flex items-center gap-2'>
                                <BsCheckLg />
                                All Music Live Stream Platforms
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsCheckLg />
                                Caller Tune Facility
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsCheckLg />
                                Bulk Upload Facility
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsCheckLg />
                                Song Availability Lifetime
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsCheckLg />
                                Unlimited Songs Releases
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsCheckLg />
                                Lifetime 95% Revenue
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsCheckLg />
                                4 Monthly Payment / Report
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsCheckLg />
                                YouTube Content ID
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsCheckLg />
                                24 Hour Approval
                            </p>
                        </div>
                        <button className='py-2 px-5 mt-3 bg-white rounded-md hover:bg-[#562DD4]'>JOIN NOW</button>
                    </div>
                </div>
                {/* 3RD CARD */}
                <div className='bg-white shadow-md pt-3 px-10 lg:h-[750px] pb-3 md:pb-3 lg:pb-0'>
                    <p className='text-xl font-light mb-3'>Previously Released Song Caller Tune</p>
                    <div className='flex items-center'>
                        <span className='font-bold text-xl'>₹</span>
                        <h1 className='font-bold'>499</h1>
                    </div>
                    <p className='text-sm text-gray-500'>Per Song /-</p>
                    <div className='text-normal'>
                        <p className='font-semibold text-gray-500 mt-5'>Features</p>
                        <div>
                            <p className='flex items-center gap-2'>
                                <BsCheckLg />
                                Caller Tune Live in 3-5 days
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsCheckLg />
                                Caller Tunes on JIO, Vi, BSNL, Airtel
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsCheckLg />
                                ISRC - Caller Tune Sync
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsCheckLg />
                                Previously released song
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsCheckLg />
                                No yearly fee
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsCheckLg />
                                95% Lifetime revenue
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsCheckLg />
                                CRBT Codes
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsCheckLg size={35} />
                                JioSaavn ( If Song is Already Live on Jiosaavn Take Down from Jiosaavn we distribute it again On JioSaavn With JioCRBT )
                            </p>
                            <p className='flex items-center gap-2'>
                                <BsCheckLg size={35} />
                                Wynk ( If Song is Already Live on Wynk Take Down from Wynk we distribute it again On Wynk With Airtel CRBT )
                            </p>
                        </div>
                        <button className='py-2 px-5 text-white bg-[#E2498A]  rounded-md hover:bg-[#562DD4] mt-3'>JOIN NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plans;