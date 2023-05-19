import Image from "next/image";
import React from "react";
import { BsCheckLg } from "react-icons/bs";
function Support() {
  return (
    <>
      <div className="container mx-auto bg-white text-black pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="col-span-1 mx-auto">
            <div   className="relative h-[350px] lg:h-[450px] w-[300px] lg:w-[400px] ">
              <Image
                src={
                  "https://res.cloudinary.com/dt0j68vdr/image/upload/v1678789638/Group_18_dfu6sx.png"
                }
                alt
                layout="fill"
              />
            </div>
          </div>
          <div className="col-span-1 my-auto">
            <h1 className="text-4xl font-bold">Support our users</h1>
            <div className="flex justify-start gap-3 align-middle items-center py-2.5">
              <div>
                <BsCheckLg size={25} />
              </div>
              <p className="text-sm ">technical support 24/7</p>
            </div>
            <div className="flex justify-start gap-3 align-middle items-center  py-2.5">
              <div>
                <BsCheckLg size={25} />
              </div>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div className="flex justify-start gap-3 align-middle items-center py-2.5">
              <div>
                <BsCheckLg size={25} />
              </div>
              <p className="text-sm ">
                Although you might be a bit intimidated by their length at
                first, they’re really not that hard to get your head around when
                you look through our list at the end
              </p>
            </div>
            <div className="py-5">
              <div className=" rounded-full border border-black px-7 py-5 w-32"></div>
              <div className=" -mt-[50px] -ml-[3px] bg-black rounded-full border  px-2 py-2  w-32">
                <div className="text-white">
                  <p className="text-[19px] text-center">Sign up</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Support;
