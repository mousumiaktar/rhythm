import { BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF, FaPinterest, FaYoutube } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

const Footer = () => {
    return (
        <div className='bg-[#1E2B4B] pb-2'>
            <div className='container mx-auto'>
                <div className='flex justify-center'>
                    <h6 className='text-center text-white font-semibold px-3 py-2 rounded-md border-2 border-white group  hover:bg-white hover:text-black inline mt-4'>24*7HELP & SUPPORTS</h6>
                </div>
                {/* ======== */}
                <div className='mt-4 grid grid-cols-1 md:grid-cols-3'>
                    <div className='flex gap-2'>
                        <BsWhatsapp size={30} className='text-green-600' />
                        <p className='text-xl text-white'>+919729786689
                        </p>
                    </div>
                    <div className='flex gap-2'>
                        <HiOutlinePhone size={30} className='text-green-600' />
                        <p className='text-xl text-white'>+919729786689
                        </p>
                    </div>
                    <div className='flex gap-2'>
                        <HiOutlineMail size={30} className='text-green-600' />
                        <p className='text-xl text-white'>contact@theblackturn.com
                        </p>
                    </div>
                </div>
                {/* 3rd part */}
                <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <div>
                        <h6 className='text-lg font-semibold text-white'>Get Started</h6>
                        <div className='w-10 border border-white mt-2'></div>
                        <div className='text-white leading-3 mt-3'>
                            <p>Music Distribution</p>
                            <p>Caller Tune Distribution</p>
                            <p>VIdeo Distribution</p>
                            <p>YouTube Content ID</p>
                            <p>Analytics and Reporting</p>
                        </div>
                    </div>

                    <div>
                        <h6 className='text-lg font-semibold text-white'>About</h6>
                        <div className='w-10 border border-white mt-2'></div>
                        <div className='text-white leading-3 mt-3'>
                            <p>FB & Insta Artist Profile Link</p>
                            <p>Instagram Stories</p>
                            <p>FB - Community</p>
                            <p>Contact Us</p>
                            <p>About</p>
                        </div>
                    </div>

                    <div>
                        <h6 className='text-lg font-semibold text-white'>Pages</h6>
                        <div className='w-10 border border-white mt-2'></div>
                        <div className='text-white leading-3 mt-3'>
                            <p>About Us</p>
                            <p>Terms and Conditions Page</p>
                            <p>Refund Policy</p>
                            <p>Contact Us</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>

                    <div>
                        <img src="https://i0.wp.com/theblackturn.com/wp-content/uploads/2021/03/google-play-logo.png?w=1000&ssl=1" alt="" />
                        <h6 className='text-lg font-semibold text-white mt-2'>Join - The Black Turn</h6>
                        <div className='w-16 border border-white my-4'></div>
                        <span className='text-xs text-white'>Start Today And Pay After Work Done. #1 Best Music Distribution Company in India.
                            #Proudlyindian 🇮🇳</span>
                        <button className='bg-red-600 text-white py-2 px-4 rounded-xl mt-2'>Join</button>
                    </div>
                </div>
            </div>

            <hr className='bg-white' />
            <div className='container mx-auto'>
                <div className='md:flex justify-between items-center'>
                    <div className='mt-8'>
                        <p className='text-white text-xs'>© All rights reserved By The Black Turn | Parent Organization : Black Turn Digital Pvt. Ltd.</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='bg-blue-900 p-2 rounded-md'>
                            <FaFacebookF size={15} className='text-white' />
                        </div>
                        <div className='bg-black p-2 rounded-md'>
                            <BsInstagram size={15} className='text-white' />
                        </div>
                        <div className='bg-red-600 p-2 rounded-md'>
                            <FaYoutube size={15} className='text-white' />
                        </div>
                        <div className='bg-blue-400 p-2 rounded-md'>
                            <BsTwitter size={15} className='text-white' />
                        </div>

                        <div className='bg-red-600 p-2 rounded-md'>
                            <FaPinterest size={15} className='text-white' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;