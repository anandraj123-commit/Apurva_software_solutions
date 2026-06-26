import Stats from '../components/Stats';
import SocialOrbitHero from '../components/SocialOrbitAnimation';
import Client from '../components/Client';
import Services from '../components/Services';
import TeamSection from '../components/TeamSection';
import Hero from '../components/AboutUs/Hero';
import AboutSection from '../components/AboutUs/AboutSection';
import FAQSection from '../components/FAQSection';
import ValuesSection from '../components/AboutUs/ValuesSection';
import Achievements from '../components/AboutUs/Achievements';
const AboutUs=()=>{
    return (
       <>
       <Hero/>
       <AboutSection/>
       <ValuesSection/>
       <Achievements/>
       <Stats/>
       <Services/>
       <Client/>
       <TeamSection/>
       <FAQSection/>
        <SocialOrbitHero bgColor="white"/>
       </>
    )
}

export default AboutUs;
