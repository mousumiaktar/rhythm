import Distribute from "./Distribute";
import DistributeOn from "./DistributeOn";
import Featured from "./Featured";
import Hero from "./Hero";
import MakeMoney from "./MakeMoney";
import MobileOperator from "./MobileOperator";
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
            <Plans />
            <WithoutCt />
            <MakeMoney />
            <MobileOperator />
        </>
    );
};

export default Home;