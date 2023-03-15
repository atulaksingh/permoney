import Image from "next/image";
import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { AiOutlineApple } from 'react-icons/ai';
import { useEffect, useState } from 'react';
function Hero() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    AOS.init();
    function handleScroll() {
      if (window.scrollY > 100) { // Replace 100 with the number of pixels you want the user to scroll before the animation starts
        setShouldAnimate(true);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className="container mx-auto pb-32 bg-white text-black">
        <div className="grid grid-cols-2">
          <div className="col-span-1 my-auto">
            <div className="ml-14  my-auto">
              <span className="text-[70px] leading-[78px] font-bold ">
                An easy way to control
                <span className="text-[#85fc8f]">your finances</span>
              </span>
              <div   className="text-[17px] w-80 py-5">Our Product was created for easly management your spending and incomes</div>
              <div>
                <div className=" rounded-full border border-black px-7 py-5 w-32">
                </div>
                <div className=" -mt-[55px] -ml-[3px] bg-black rounded-full border  px-2 py-2  w-32">
                <div className="flex gap-1 justify-center align-middle items-center">
                <div><AiOutlineApple size={30} color="white"  /></div>
                <div className="text-white">
                  <p className="text-[10px]">Available on the <sapn className="text-[12px]">App Store</sapn></p>
                </div>
                </div>
                 </div> 
              </div>
            </div>
          </div>
          <div className="col-span-1 m-auto ">
           <div className="mt-5">
           <div className="relative h-[550px] w-80 parent">
              <Image 
                src={"https://res.cloudinary.com/dt0j68vdr/image/upload/v1678787443/Group_21_1_hayrkh.png"}
                alt
                layout="fill"
              />
              <div 
                data-aos="zoom-in-right"  data-aos-duration="1000"
                 className="absolute top-10 -right-[140px] h-[270px] w-[270px]">
              <Image 
                src={"https://res.cloudinary.com/dt0j68vdr/image/upload/v1678787430/Group_20_xmb8m9.png"}
                alt
                layout="fill"
              />
              </div>
              <div className={shouldAnimate ? 'fade-in' : 'absolute -bottom-[70px] -left-[150px] h-[200px] w-[230px]'}>
              <Image 
                src={"https://res.cloudinary.com/dt0j68vdr/image/upload/v1678794468/Vector_21_2_b9aufz.png"}
                alt
                layout="fill"
                className=""
              />
              </div>
              <div 
                data-aos="zoom-in-right"   data-aos-duration="1000"
                 className="absolute -bottom-[70px] -left-[150px] h-[200px] w-[230px]">
              <Image 
                src={"https://res.cloudinary.com/dt0j68vdr/image/upload/v1678787434/Group_21_xzehxz.png"}
                alt
                layout="fill"
                className=""
              />
              </div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
