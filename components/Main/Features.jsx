import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function Features() {
  const [counterOn, setCounterOn] = useState(false);
useEffect(() => {
  AOS.init();
}, [])


 return (
    <>
      <div className="container mx-auto bg-white text-black">
        <div className="text-center">
          <h1 className="font-bold text-4xl py-5">Features</h1>
          <p className="text-lg w-96 m-auto">
            Simple functional and modern design can help you easy control your
            money
          </p>
        </div>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="grid grid-cols-2 mx-40">
            <div className="col-span-1 py-10">
              <div className="w-[90%]     mx-auto border-2 border-black rounded-3xl">
                <div className="p-5">
                  <h1 className="font-bold text-2xl">Easy Control</h1>
                  <div className="py-2 text-[15px] font-[500]">
                    Although you might be a bit intimidated by their length at
                    first, they’re really not that hard to get your head around
                    when you look through our list at the end.
                  </div>
                </div>

                <div className="relative  border-t-2 border-r-8 border-black mr-5 rounded-r-xl">
                  <Image
                    src={
                      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1678705230/movieapp/Capture1_zq4wqb.png"
                    }
                    height={90}
                    width={400}
                    alt="img"
                    className="rounded-2xl p-2 "
                  />
                  <div  data-aos="zoom-in-right"  data-aos-duration="100" className="absolute top-[70px] right-[50px] bg-black text-white w-20  rounded-lg text-center">
                    ${" "}
                    {counterOn && (
                      <CountUp
                        start={-85.03}
                        end={57.012}
                        duration={2.75}
                        separator=" "
                        decimals={3}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 py-10">
              <div className="w-[90%] p-5  bg-[#66cf64e3] mx-auto border-2 border-black rounded-3xl">
                <div className="font-bold text-2xl">
                  <h1>Real Time Accounting</h1>
                </div>
                <div className="py-2 text-[15px] font-[500]">
                  Although you might be a bit intimidated by their length at
                  first, they’re really not that hard to get your head around
                  when you look through our list at the end.
                </div>
                <div className=" bg-white text-black border-2 border-b-8  border-r-8  border-black rounded-3xl p-10 mt-10">
                  <div className="flex justify-between ">
                    <div>ADA</div>
                    <div>$0.08882934</div>
                  </div>
                  <div className="flex justify-between ">
                    <div className="text-[15px] font-bold">Cardano</div>
                    <div className="text-[15px] font-bold">
                      
                      {counterOn && (
                        <CountUp
                          start={-85.03}
                        end={-11.012}
                        duration={2.75}
                        separator=" "
                        decimals={3}
                        />
                      )}
                      %
                    </div>
                  </div>
                </div>
                <div className=" bg-white text-black  mx-8 px-2 rounded-b-xl shadow-3xl">
                  <div className="flex justify-between ">
                    <div className="text-[11px] ">ADA</div>
                    <div className="text-[11px] font-bold">$0.08882934</div>
                  </div>
                  <div className="flex justify-between pb-2">
                    <div className="text-[15px] font-bold">Cardano</div>
                    <div className="text-[15px] font-bold">
                      {counterOn && (
                        <CountUp
                           start={-75.03}
                        end={-8.012}
                        duration={2.75}
                        separator=" "
                        decimals={3}
                        />
                      )}
                      %
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-span-1 py-10"></div> */}
          </div>
        </ScrollTrigger>
      </div>
    </>
  );
}

export default Features;
