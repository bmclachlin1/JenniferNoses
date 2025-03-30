import { Link } from 'react-router-dom';

import hero from '../assets/images/hero.jpg';
import warmandcuddly from '../assets/images/warm-and-cuddly.jpg';
import puppybreath from '../assets/images/puppy-breath.jpg';
import freshlybathed from '../assets/images/freshly-bathed.jpg';
import box from '../assets/images/box.jpg';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">

      <section className="grid grid-cols-1 sm:grid-cols-2 bg-[#bdaba9] py-10">
        <div className="flex items-center justify-center text-white font-bold text-center text-2xl sm:text-5xl px-8 sm:pl-20">
          Organic scents for humans inspired by the unconditional love of our cherished canine companions.
        </div>
        <img src={hero} alt="Hero" className="w-full h-[600px] object-cover" />
      </section>

      <section className="flex flex-col items-center justify-center bg-[#2c2926] gap-6 py-6">
        <div className="text-white font-bold text-2xl sm:text-5xl text-center py-10 px-6">
          Our Perfumes
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center justify-around px-10">
          <div className="flex flex-col justify-between items-center gap-6">
            <img 
              src={warmandcuddly} 
              alt="Warm & Cuddly" 
              className="w-[300px] h-[300px] object-cover rounded-full" 
            />
            <div className="font-bold text-white text-2xl sm:text-4xl">Warm & Cuddly</div>  
          </div>
          <div className="flex flex-col justify-between items-center gap-6">
            <img src={puppybreath} alt="Puppy Breath" className="w-[300px] h-[300px] object-cover rounded-full" />
            <div className="font-bold text-white text-2xl sm:text-4xl">Puppy Breath</div>  
          </div>
          <div className="flex flex-col justify-between items-center gap-6">
            <img src={freshlybathed} alt="Freshly Bathed" className="w-[300px] h-[300px] object-cover rounded-full" />
            <div className="font-bold text-white text-2xl sm:text-4xl">Freshly Bathed</div>  
          </div>
        </div>
        <Link to="/shop" className="text-white font-bold text-xl border-2 border-white bg-[#2c2926] py-2 px-4 rounded">
          View Our Products
        </Link>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2">
        <div className="flex flex-col gap-6 items-start justify-center bg-[#B79166] px-20 py-10"> 
          <div className="text-2xl sm:text-4xl font-bold text-white">About</div>
          <div className="text-white poppins-regular">The collection includes Puppy Breath, Freshly Bathed, and Warm & Cuddly.</div>
          <div className="text-white poppins-regular">These delightful scents will transport you to moments with your furry friends, even when they're not by your side.</div>
          <Link to="/shop" className="text-white font-bold text-xl border-2 border-white bg-[#B79166] py-2 px-4 rounded">
            Shop Now
          </Link>
        </div> 
        <img src={box} alt="Product Packaging" className="w-full h-[600px] object-cover" />
      </section>

      <section className="py-16 px-16">
        <div className="text-4xl sm:text-6xl text-[#383129] text-center font-bold">Whoever said diamonds are a girl's best friend never owned a dog.</div>
      </section>

    </div>
  );
}

export default Home;