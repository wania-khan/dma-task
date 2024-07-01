import './App.css';
import HeaderSection from './components/headerSection';
import HeaderBar from './components/headerBar';
import HeroSection1 from './components/heroSection-1';
import HeroSection2 from './components/heroSection-2';
import HeroSection3 from './components/heroSection-3';
import HeroSection4 from './components/heroSection-4';
import HeroSection5 from './components/heroSection-5';
import LogoBar from './components/logoBar';
import Footer from './components/footer';
import FooterHelp from './components/footerHelp';

function App() {
  return (
    <>
    <HeaderSection />
    <HeaderBar />
    <HeroSection1 />
    <HeroSection2 />
    <HeroSection3 />
    <HeroSection4 />
    <HeroSection5 />
    <LogoBar />
    <Footer />
    <FooterHelp />
    <br></br>
    <div className='max-w-screen-xl mx-auto flex justify-center items-center'>
    <p className='font-[LatoR] text-sm text-center leading-[21px] font-normal'>Copyright © 2022 Digital Marketing Agency.  Terms & Conditions  |  Privacy Statement  |  Applicant Privacy Notice  |  Do Not Sell My Personal Information  |  Cookie Notice  |  Global Unsubscribe</p>
    </div>
    <br></br>
    </>
  );
}

export default App;
