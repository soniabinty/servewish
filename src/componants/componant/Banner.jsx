
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../assets/service/top-view-beutiful-woman-spa-lying-with-flowers.jpg'
import img2 from '../../assets/service/man-renovating-his-house-with-design-space.jpg'
import img3 from '../../assets/service/doctor-is-going-examine-his-patient-using-his-stethoscope-sitting-people.jpg'
import img4 from '../../assets/service/6452eb3b65ac73450678df9a_how-to-start-a-food-delivery-service-HERO.webp'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button, Typography } from "@material-tailwind/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Typewriter } from 'react-simple-typewriter'
import { Link } from "react-router-dom";

const Banner = () => {

  const handleType = (count) => {
    // access word count number
   }
  

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  return (
    <div className=" mb-12 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide>
          <div
             className="relative h-[440px] w-full md:h-[660px] "
            style={{
              backgroundImage: `url('${img1}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
              <div className="absolute inset-0 bg-black bg-opacity-70 md:flex  justify-center  items-center text-white p-4 lg:p-4 md:space-y-6 ">

              <div className="flex-1 md:pl-0 lg:pl-8 md:space-y-6">  
         
          <h1 className="md:text-6xl text-2xl heading font-extrabold"  style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
          Transform your space with{' '}
        <span className="text-[#fb110d]" style={{  fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[' Relaxation']}
            loop={Infinity}
            cursor
            cursorStyle=''
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
        
       
          <Typography
            className="mt-2 mb-6 text-base  font-normal text-white"
          >
          Turn your home into a sanctuary of relaxation and beauty. With soothing aromas, calming music, and a touch of self-care, you can create a spa-like retreat that rejuvenates your mind and body. Indulge in the luxury of unwinding anytime, embracing the true essence of beauty.
          </Typography>
        
        
          <div>
  <Link to={'/services'} className='btn-all uppercase extra-btn  font-bold cursor-pointer text-white flex items-center gap-1'>

 <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                               Explore more
  </Link>
                               
                          
</div>
</div>

<div className="flex-1">

</div>

        
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
          className="relative h-[440px] w-full md:h-[660px] "
            style={{
              backgroundImage: `url('${img2}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
              <div className="absolute inset-0 bg-black bg-opacity-70 md:flex  justify-center  items-center text-white p-4 md:space-y-6 ">

            <div className="flex-1 md:pl-8 md:space-y-6">  
         
          <h1 className="md:text-6xl text-2xl heading font-extrabold"  style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
          Reliable Home Repairs & 
{' '}
        <span className="text-[#fb110d]" style={{  fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[' Services']}
            loop={Infinity}
            cursor
            cursorStyle=''
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
        
       
          <Typography
            className="mt-2 mb-6 text-base  font-normal text-white"
          >
          Whether it’s repairs, cleaning, or installations, our skilled professionals ensure top-quality service with reliability and efficiency. We prioritize customer satisfaction, offering quick and affordable solutions to keep your home in perfect shape. Let us handle the hard work while you enjoy a stress-free home experience!
          </Typography>
        
<div>
  <Link to={'/services'} className='btn-all uppercase extra-btn  font-bold cursor-pointer text-white flex items-center gap-1'>

 <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                               Explore more
  </Link>
                               
                          
</div>
</div>

<div className="flex-1">

</div>

        
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
           className="relative h-[440px] w-full md:h-[660px] "
            style={{
              backgroundImage: `url('${img3}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
              <div className="absolute inset-0 bg-black bg-opacity-70 md:flex  justify-center  items-center text-white p-4 md:space-y-6 ">
            <div className="flex-1 md:pl-8 md:space-y-6">    
         
          <h1 className="md:text-6xl text-2xl heading font-extrabold"  style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
          Home Visits by Experienced 
{' '}
        <span className="text-[#fb110d]" style={{  fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[' Doctors']}
            loop={Infinity}
            cursor
            cursorStyle=''
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
        
       
          <Typography
            className="mt-2 mb-6 text-base  font-normal text-white"
          >
          We bring professional healthcare services right to your home, ensuring convenience, comfort, and quality care. Whether you need a routine check-up, urgent medical attention, or specialized treatments, our experienced doctors and healthcare professionals are just a call away.
          </Typography>
        
        
          <div>
  <Link to={'/services'} className='btn-all uppercase extra-btn  font-bold cursor-pointer text-white flex items-center gap-1'>

 <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                               Explore more
  </Link>
                               
                          
</div>
</div>

<div className="flex-1">

</div>

        
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div
            className="relative h-[440px] w-full md:h-[660px] "
            style={{
              backgroundImage: `url('${img4}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-70 md:flex  justify-center  items-center text-white p-4 md:space-y-6 ">

<div className="flex-1 md:pl-8 md:space-y-6">  
         
          <h1 className="md:text-6xl text-2xl heading font-extrabold"  style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
          Restaurant-Quality Meals at 
{' '}
        <span className="text-[#fb110d]" style={{  fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[' Home']}
            loop={Infinity}
            cursor
            cursorStyle=''
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h1>
        
       
          <Typography
            className="mt-2 mb-6 text-base  font-normal text-white"
          >
          We bring mouthwatering, freshly prepared meals straight to your doorstep. Whether you're craving homemade comfort food, healthy meal options, or gourmet delights, our expert chefs craft every dish with love and quality ingredients.
          </Typography>
        
        
          <div>
  <Link to={'/services'} className='btn-all uppercase extra-btn  font-bold cursor-pointer text-white flex items-center gap-1'>

 <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                               Explore more
  </Link>
                               
                          
</div>
</div>

<div className="flex-1">

</div>

        
            </div>
          </div>
        </SwiperSlide>

       
      </Swiper>
    </div>
  );
};

export default Banner;
