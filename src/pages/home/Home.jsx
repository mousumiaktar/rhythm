import Distribute from "./Distribute";
import DistributeOn from "./DistributeOn";
import Featured from "./Featured";
import Hero from "./Hero";
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
        </>
    );
};

export default Home;