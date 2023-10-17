import Accordion from './Accordion';


const MusicDistribution = () => {
    return (
        <div className='container mx-auto mt-16'>
            <div className='mx-6'>
                <div>
                    <h3 className='font-semibold text-center mb-2'>Music Distribution</h3>
                </div>
                <Accordion
                    title="All platforms"
                    content="Domestic Full Track Services:
                Amazon, Gaana, Jio Saavn, Hungama Wynk."
                    description="International Full Track Services:
                Alibaba, Apple(Itune), Audible Magic, Awa, Boomplay, Deezer, Facebook, Iheart, Imusic Corp, Jaxsta, Kkbox, Kuack Media, Napster, Netease, Pandora, Resso, Snap, Soundcloud, Spotify, Touch Tunes, youtube music."
                />
                <Accordion
                    title="Custom Label"
                    description="Distribute Music Using Your Own Label Name, and Get Your Custom C and P Line, Custom Label Name, Unlimited Lifetime Releases, with Unlimited artists."
                />
                <Accordion
                    title="Song live Time"
                    description="We deliver on all platforms minimum (1-3 Days) Maximum(5-8 Days) .Get your song live in 3 hours. mail or contact us."
                />
                <Accordion
                    title="Customize Caller Tune For All Networks"
                    description="We Distribute Music on all major Telecom operators – Jio, Airtel, Idea, Vodafone, Bsnl."
                />
                <Accordion
                    title="Pay once,use lifetime"
                    description="Pay Once for song distribution and your song live for a lifetime"
                />
                <Accordion
                    title="95% revenue share"
                    description="Your Song Play Anywhere Anytime You Get Paid 95% Revenue Your 5% our."
                />
                <Accordion
                    title="24*7 Phone Support"
                    description="Call Any Time : +919729786689

                Mail us : contact@theblackturn.com"
                />
                <Accordion
                    title="Old Song(Already Released Song) Caller Tune"
                    description="Want to create a Caller tune for your previous released song. Call Us Now"
                />
            </div>

        </div>
    );
};

export default MusicDistribution;