import { BsCheckLg } from 'react-icons/bs';
import { FaDollarSign } from 'react-icons/fa';
import { TbHandFinger } from 'react-icons/tb';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const WithoutCt = () => {
    return (
        <div className='container mx-auto mt-16'>
            <div className='flex justify-center mb-8'>
                <div>
                    <h3 className='font-semibold mb-2'>Music Distribution Plans Without CT</h3>
                    <div className='flex justify-center'>
                        <div className='w-16 border-dashed border-2 border-red-600 '></div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {/* CARD-ONE */}
                <div className='bg-gradient-to-t from-[#3C9FE2] to-[#35BFC9] text-white px-10 py-8'>
                    <p className='text-xl font-light'>Single Song
                        Without Caller Tune</p>
                    <div className='flex items-center'>
                        <span className='font-bold text-xl'>₹</span>
                        <h1 className='font-bold'>599</h1>
                    </div>
                    <p className='text-sm'>Per song /-</p>
                    <div className='text-normal'>
                        <p className='font-semibold'>Features</p>
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
                        <button className='py-2 px-3 text-gray-700  bg-white rounded-md hover:bg-[#562DD4] hover:text-white mt-2'>UPLOAD NOW</button>
                    </div>
                </div>
                {/* SECOND CARD */}
                <div className='bg-[#E2498A]'>
                    <div className='mx-16'>
                        <div className='flex justify-center'>
                            <div className='mt-10'>
                                <div>
                                    <div className='bg-white p-10 rounded-full relative'>
                                        <TbHandFinger size={20} />
                                        <p className='bg-purple-700 text-white px-1 rounded-full border-2 border-white absolute mt-[-50px] ml-[20px]'>step1</p>
                                    </div>
                                    <MdOutlineKeyboardArrowDown size={20} className='ml-[45px] mt-2 text-white' />
                                </div>
                            </div>
                        </div>
                        <div className='text-center text-white text-base mt-3'>
                            <p>Choose your Plan</p>
                            <p>Select your plan and upload your audio file & artwork.
                                Its quite easy process.</p>
                        </div>
                    </div>
                    {/* =============== */}
                    <div className='mx-16'>
                        <div className='flex justify-center'>
                            <div className='mt-10'>
                                <div>
                                    <div className='bg-white p-10 rounded-full relative'>
                                        <FaDollarSign className='text-purple-700' size={20} />
                                        <p className='bg-purple-700 text-white px-1 rounded-full border-2 border-white absolute mt-[-50px] ml-[20px]'>step2</p>
                                    </div>
                                    <MdOutlineKeyboardArrowDown size={20} className='ml-[45px] mt-2 text-white' />
                                </div>
                            </div>
                        </div>
                        <div className='text-center text-white text-base mt-3'>
                            <p>Choose your Plan</p>
                            <p>Select your plan and upload your audio file & artwork.
                                Its quite easy process.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WithoutCt;