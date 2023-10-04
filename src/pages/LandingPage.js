import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

function LandingPage() {
  return (
    <div className='scroll-smooth'>
      <section className="w-full bg-[url('./../public/background-image.png')]">
        <Navbar />
        <Hero />
      </section>
    </div>
  );
}
export default LandingPage;
