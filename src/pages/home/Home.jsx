import BestMusic from "./BestMusic";
import ClientList from "./ClientList";
import Distribute from "./Distribute";
import DistributeOn from "./DistributeOn";
import Download from "./Download";
import Featured from "./Featured";
import Hero from "./Hero";
import MakeMoney from "./MakeMoney";
import MobileOperator from "./MobileOperator";
import MusicDistribution from "./MusicDistribution";
import Plans from "./Plans";
import Stores from "./Stores";
import WhatWeDo from "./WhatWeDo";
import WithoutCt from "./WithoutCt";

const Home = () => {
    return (
        <>
            <Hero />
            <Distribute />
            <DistributeOn />
            <Stores />
            <WhatWeDo />
            <Featured />
            <MusicDistribution />
            <Plans />
            <WithoutCt />
            <MakeMoney />
            <MobileOperator />
            <BestMusic />
            <ClientList />
            <Download />
        </>
    );
};

export default Home;