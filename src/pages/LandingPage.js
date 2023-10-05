import Connecting from '../components/Connecting';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Navbar from '../components/Navbar';
import SmartSolutions from '../components/SmartSolutions';

function LandingPage() {
  return (
    <div className='scroll-smooth text-slate-600'>
      <section className="w-full bg-[url('./../public/background-image.png')] bg-repeat-x">
        <Navbar />
        <Hero />
        <HowItWorks />
        <SmartSolutions />
        <Connecting />
      </section>
    </div>
  );
}
export default LandingPage;
