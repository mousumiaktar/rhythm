import Distribute from "./Distribute";
import DistributeOn from "./DistributeOn";
import Featured from "./Featured";
import Hero from "./Hero";
import Plans from "./Plans";
import Stores from "./Stores";
import WhatWeDo from "./WhatWeDo";

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
        </>
    );
};

export default Home;