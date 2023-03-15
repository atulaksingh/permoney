import React from "react";
import { AiOutlineAppstore, AiOutlineArrowDown } from "react-icons/ai";
import { IoAdd, IoMdAdd } from "react-icons/io";
import { AiOutlineRight } from "react-icons/ai";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
function EndPage() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <div className="container mx-auto py-20 bg-white text-black">
        <div className="bg-black text-white w-[80%] mx-auto rounded-3xl border-r-8  border-b-8 border-green-400">
          <div className="grid grid-cols-12">
            <div className="col-span-7 m-auto">
              <div className="w-[70%] mx-auto">
                <h1 className="py-5 text-[35px]">Get started for free</h1>
                <div className="text-[13px] text-gray-500">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
                </div>
                <div className="pt-8">
                  <div className=" rounded-full border border-white px-7 py-5 w-32"></div>
                  <div className=" -mt-[46px] -ml-[3px] bg-white  rounded-full border  px-2 py-2  w-32">
                    <div className="text-black">
                      <div className="text-[15px] font-bold text-center">
                        Get Started
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos-offset="120"
              data-aos="fade-up"
              data-aos-duration="1000"
              className="col-span-5 mt-28"
            >
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <div className="bg-white text-black w-[60%] mt-5 px-5 pt-5 rounded-3xl border-r-8   border-green-400">
                  <div className="flex justify-between">
                    <div className="text-base font-bold">My wallet</div>
                    <div className="text-xs border border-black  my-auto rounded-md px-1">
                      USD
                    </div>
                  </div>
                  <div className="text-[12px] text-gray-400 text-center font-[600] py-2">
                    Total balance
                  </div>
                  <div className="font-[800] text-center text-[23px] my-2">
                    $
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
                  <div className="flex justify-center gap-10">
                    <div>
                      <div className="  p-2 bg-black    inline-block rounded-full">
                        <AiOutlineArrowDown size={15} color="green" />
                      </div>
                      <div className="text-[11px] font-[600] leading-[5px]">
                        send
                      </div>
                    </div>
                    <div>
                      <div className="  p-2 bg-black    inline-block rounded-full">
                        <IoMdAdd size={15} color="green" />
                      </div>
                      <div className="text-[11px] font-[600] leading-[5px]">
                        purchase
                      </div>
                    </div>
                    <div>
                      <div className="  p-2 bg-black    inline-block rounded-full">
                        <AiOutlineAppstore size={15} color="green" />
                      </div>
                      <div className="text-[11px] font-[600] leading-[5px]">
                        send
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-start gap-2">
                      <div className="text-[12px] font-[900]">Revenue</div>
                      <div className="text-[10px] text-gray-400">
                        this month
                      </div>
                    </div>
                    <div className="flex gap-3 ">
                      <Box width={160}>
                        <Slider
                          aria-label="Default"
                          valueLabelDisplay="off"
                          color="success"
                        />
                      </Box>
                      <div className="font-[900] text-[15px] mt-1">$21.3k</div>
                    </div>
                    <div className="text-gray-700 text-[10px] font-[800]">
                      17.75%
                    </div>
                    <div className="flex justify-between align-middle items-center mt-4 mb-2">
                      <div className="font-[600] text-[15px]">Portfolio</div>
                      <div>
                        <AiOutlineRight />
                      </div>
                    </div>
                    <div className="flex gap-2 items-end ">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        className="bg-black text-white p-3 rounded-xl"
                      >
                        <div className="  p-1 bg-black    inline-block rounded-full">
                          <AiOutlineArrowDown size={20} color="green" />
                        </div>
                        <div className="text-[13px]">Bitcoin</div>
                        <div className="font-[700]">$43.241</div>
                        <div className="text-gray-700 text-[10px] font-[800]">
                          17.75%
                        </div>
                      </div>
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        className="bg-black text-white p-3 rounded-xl"
                      >
                        <div className="  p-1 bg-black    inline-block rounded-full">
                          <AiOutlineArrowDown size={20} color="green" />
                        </div>
                        <div className="text-[13px]">Bitcoin</div>
                        <div className="font-[700]">$43.241</div>
                        <div className="text-gray-700 text-[10px] font-[800]">
                          17.75%
                        </div>
                      </div>
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        className="bg-black text-white p-3 rounded-xl"
                      >
                        <div className="  p-1 bg-black    inline-block rounded-full">
                          <AiOutlineArrowDown size={20} color="green" />
                        </div>
                        <div className="text-[13px]">Bitcoin</div>
                        <div className="font-[700]">$43.241</div>
                        <div className="text-gray-700 text-[10px] font-[800]">
                          17.75%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollTrigger>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EndPage;
