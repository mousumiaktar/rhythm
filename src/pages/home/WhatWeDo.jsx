const WhatWeDo = () => {
    return (
        <div className='container mx-auto mt-20'>
            <div>
                <div className='flex justify-center'>
                    <div>
                        <p className='text-xl text-gray-400 tracking-wider font-light'>What We Do</p>
                        <div className='w-16 border-dashed border-2 border-red-600 ml-6'></div>
                    </div>
                </div>
                {/* Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5'>
                    <div className=''>
                        <img className='h-32 mx-auto' src="https://theblackturn.com/wp-content/uploads/2021/03/on-deman-asset-loading1.svg" alt="" />
                        <div className='text-center mt-4'>
                            <h4 className='font-light text-xl'>Fastest Approval Time</h4>
                            <p className='mt-3 text-base text-gray-500'>we approve your song very fast with no time. We deliver on all platforms minimum (3-5 Days) Maximum(8-10 Days)</p>
                        </div>
                    </div>
                    {/* Card-2 */}
                    <div className=''>
                        <img className='h-32 mx-auto' src="https://theblackturn.com/wp-content/uploads/2021/03/line-icon2.svg" alt="" />
                        <div className='text-center mt-4'>
                            <h4 className='font-light text-xl'>Custom CRBT (Call Ring Back Tune)</h4>
                            <p className='mt-3 text-base text-gray-500'>Creates 1-4 custom caller tune for Airtel, VI, Bsnl, & 45 Sec single Jiotune. Deliver caller tune Min. (3-5 days) max. (5-8 days)</p>
                        </div>
                    </div>
                    {/* Card-3 */}
                    <div className=''>
                        <img className='h-32 mx-auto' src="https://theblackturn.com/wp-content/uploads/2021/03/site-sync-vector.svg" alt="" />
                        <div className='text-center mt-4'>
                            <h4 className='font-light text-xl'>Free ISRC and UPC code</h4>
                            <p className='mt-3 text-base text-gray-500'>If you are a new artist no worry we provide you a fresh unlimited artist UPC or ISRC code for your every Audio & Video Album.</p>
                        </div>
                    </div>
                    {/* Card-4 */}
                    <div className=''>
                        <img className='h-32 mx-auto' src="https://theblackturn.com/wp-content/uploads/2021/03/floating-effect.svg" alt="" />
                        <div className='text-center mt-4'>
                            <h4 className='font-light text-xl'>95% Royalty</h4>
                            <p className='mt-3 text-base text-gray-500'>Get Your Monthly Reports with no changes we send you original reports with cut our percentage we don’t hide anything.</p>
                        </div>
                    </div>
                    {/* Card-5 */}
                    <div className=''>
                        <img className='h-32 mx-auto' src="https://theblackturn.com/wp-content/uploads/2021/03/live-copy.svg" alt="" />
                        <div className='text-center mt-4'>
                            <h4 className='font-light text-xl'>Custom Record Label</h4>
                            <p className='mt-3 text-base text-gray-500'>Get Your Custom C and P Line, Custom Label Name, Unlimited Lifetime Releases, with Unlimited artist .</p>
                        </div>
                    </div>
                    {/* Card-6 */}
                    <div className=''>
                        <img className='h-32 mx-auto' src="https://theblackturn.com/wp-content/uploads/2021/03/section-nesting.svg" alt="" />
                        <div className='text-center mt-4'>
                            <h4 className='font-light text-xl'>One Time Paymen​</h4>
                            <p className='mt-3 text-base text-gray-500'>Pay Once Your song lives for Life Time.  Accepted Payment through NEFT PayTM, GPay, PayPal, UPI, PhonePe, etc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;