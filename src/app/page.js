import Authorization from "./components/Authorization/Authorization";
import Banking from "./components/Banking/Banking";
import Enterprise from "./components/Enterprise/Enterprise";
import Explore from "./components/Explore/Explore";
import Finance from "./components/Finance/Finance";
import Global from "./components/Global/Global";
import Hero from "./components/Hero/Hero";
import Recommendation from "./components/Recommendation/Recommendation";
import Resource from "./components/Resource/Resource";
import Working from "./components/Working/Working";

export default function Home() {
    return (
        <main style={{display:'flex', flexDirection : 'column' , rowGap:'50px'}}>
            <Hero />
            <Global/>
            <Banking/>
            <Finance />
            <Authorization/>
            <Working />
            <Enterprise/>
            <Explore/>
            <Resource/>
            <Recommendation/>
        </main>
    );
}
