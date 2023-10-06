import Connecting from '../components/Connecting';
import Counter from '../components/Counter';
import Faq from '../components/Faq';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Navbar from '../components/Navbar';
import PricingPlan from '../components/PricingPlan';
import SmartSolutions from '../components/SmartSolutions';
import Testimonial from '../components/Testimonial';

function LandingPage() {
  return (
    <div className='scroll-smooth text-slate-600'>
      <section className="w-full bg-[url('./../public/background-image.png')] bg-repeat-x">
        <Navbar />
        <Hero />
        <HowItWorks />
        <SmartSolutions />
        <Connecting />
        <Counter />
        <Testimonial />
        <PricingPlan />
        <Faq />
      </section>
    </div>
  );
}
export default LandingPage;
