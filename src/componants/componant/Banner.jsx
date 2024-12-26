
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button, Typography } from "@material-tailwind/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


const Banner = () => {

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
            className="relative w-full h-[560px]"
            style={{
              backgroundImage: `url('https://i.ibb.co.com/TmHDvHL/images-q-tbn-ANd9-Gc-Rpkpl84549-Mo-KHCw8x-Ee-AMaz-O-1om-db3e-NA-s.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-4 space-y-3 ">
            <Typography
            variant="small"
            color="white"
            className="font-bold mb-2"
          >
           JUST FOR YOU
          </Typography>
          <Typography className="md:text-5xl font bold" color="white">
           Find your needed through our service
          </Typography>
          <Typography
            className="mt-2 mb-6 !text-base font-normal text-white"
          >
          Explore and find trusted service providers, apps, and templates to help your company grow better.
          </Typography>
          <Button variant="outlined" className="flex-shrink-0 border-green-900 text-white">
            Explore more
          </Button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative w-full h-[560px]"
            style={{
              backgroundImage: `url('https://i.ibb.co.com/ctzZt6V/images-q-tbn-ANd9-Gc-SYju7-Cjee-B2-Rp-Loi8q-ACKa-D2-Nbyexzt-Pq-Cjg-s.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-4 space-y-3 ">
        
          <Typography className="md:text-5xl font bold" color="white">
          Our 100+ Services
          </Typography>
          <Typography
            className="mt-2 mb-6 !text-base font-normal text-white md:w-1/2 text-center mx-auto"
          >
         You all are able to be find out your needed service to use. Because we have 100+ services and 17+ collaboration with other company.
          </Typography>
          <div className='col-span-1 space-y-8 '>
<div className='flex gap-12'>
  
<div className='text-center  p-4 w-[120px] rounded-lg bg-white'>
          <img className='w-30' src="https://i.ibb.co.com/gVDTPF0/images-q-tbn-ANd9-Gc-Tp-Fm-MGd-Popahu-Jj9oc7mv-Mhe-efnra-Hiffq-A-s.png" alt="" />
          <h3 className='text-xl font-bold text-black'>Shopping</h3>
        </div>
       
        <div className='text-center  p-4 w-[120px] rounded-lg bg-white'>
          <img className='w-30' src="https://i.ibb.co.com/QJfwWdh/images-q-tbn-ANd9-Gc-Qa-B0-Q0ot-o0ae-N9-ESg-Ir-Bw-Vl-DEVr-DDBAWk-g-s.png" alt="" />
          <h3 className='text-xl font-bold text-black' >Resturants</h3>
        </div>
        <div className='text-center  p-4 w-[120px] rounded-lg bg-white'>
          <img className='w-30' src="https://i.ibb.co.com/j4BhGFg/images-q-tbn-ANd9-Gc-SH359ym7nstt5q-IAd34-Ugzy-Rbt-Hr4-TTL9-Cu-Q-s.png" alt="" />
          <h3 className='text-xl font-bold text-black'>Transport</h3>
        </div>
</div>

<div className='flex gap-12'>
  
  <div className='text-center  p-4 w-[120px] rounded-lg bg-white'>
            <img className='w-30' src="https://i.ibb.co.com/wNdSPs1/images-q-tbn-ANd9-Gc-Sagdsq5-V8bmpush-Ss-NME5b3-Pj-Fc1-D3-JZZCng-s.png" alt="" />
            <h3 className='text-xl font-bold text-black'>Beauty & Spa</h3>
          </div>
         
          <div className='text-center  p-4 w-[120px] rounded-lg bg-white'>
            <img className='w-30' src="https://i.ibb.co.com/djWFwsk/images-q-tbn-ANd9-Gc-Tj5-Io4-Hr4-Qocji8-FVM-Px-QQlh-Ln-JF-HM0-Hr-Q-s.png" alt="" />
            <h3 className='text-xl font-bold text-black'>Home Service</h3>
          </div>
          <div className='text-center p-4 w-[120px] rounded-lg bg-white'>
            <img className='w-30' src="https://i.ibb.co.com/9wFFNNn/images-q-tbn-ANd9-Gc-RJb-Be5dye-FVcp-VVxxv-Vo-NFd-QXjrf-ICqnd8-HQ-s.png" alt="" />
            <h3 className='text-xl font-bold text-black'>Medical Issue</h3>
          </div>
  </div>
  
      

     
       </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="relative w-full h-[560px]"
            style={{
              backgroundImage: `url('https://i.ibb.co.com/6NB2qPt/images-q-tbn-ANd9-Gc-Qpfb-Yr-Nk-WNww-I2-Vvocr-XHex-Ylytp-K5-Ylw-K5-Q-s.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-4 space-y-3 ">
        
          <Typography className="md:text-5xl font bold" color="white">
       Join Our Community
          </Typography>
          <Typography
            className="mt-2 mb-6 !text-base font-normal text-white md:w-1/2 text-center mx-auto"
          >
        You can search our repution by reviews, customers satisfiction and you also able to add your services details for your business purpose.
          </Typography>
          <div className='md:flex  text-black gap-12 items-center '>
          <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-80  p-6">
  <div class="flex items-center mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-slate-600">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
    <h5 class="ml-3 text-slate-800 text-xl font-semibold">
      Through You need
    </h5>
  </div>
  <p class="block text-slate-600 leading-normal font-light mb-4">
   What You want you can get by us and enjoy it.
  </p>
  <div>
    <a href="#" class="text-slate-800 font-semibold text-sm hover:underline flex items-center">
      Learn More
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  </div>
</div>
      
<div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-80 p-6">
  <div class="flex items-center mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-slate-600">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
    <h5 class="ml-3 text-slate-800 text-xl font-semibold">
      Website Review Check
    </h5>
  </div>
  <p class="block text-slate-600 leading-normal font-light mb-4">
  Its Our customers satisfiction who get services from us.
  </p>
  <div>
    <a href="#" class="text-slate-800 font-semibold text-sm hover:underline flex items-center">
      Learn More
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  </div>
</div>
      
<div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-80 p-6">
  <div class="flex items-center mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-slate-600">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
    <h5 class="ml-3 text-slate-800 text-xl font-semibold">
    Join to us
    </h5>
  </div>
  <p class="block text-slate-600 leading-normal font-light mb-4">
  Its really a big opportunity for you to partcipating with services.
  </p>
  <div>
    <a href="#" class="text-slate-800 font-semibold text-sm hover:underline flex items-center">
      Learn More
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  </div>
</div>
      
       </div>
            </div>
          </div>
        </SwiperSlide>

       
      </Swiper>
    </div>
  );
};

export default Banner;
