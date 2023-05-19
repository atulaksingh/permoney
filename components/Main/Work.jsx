import React from "react";
import { AiOutlineAppstore } from "react-icons/ai";
function Work() {
  return (
    <>
      <div className="container mx-auto py-10 bg-white text-black">
        <div className="text-center">
          <h1 className="font-bold text-4xl py-5">How it works</h1>
          <p className="text-lg w-[100%] m-auto">
            Simple functional and modern design can help you easy control your
            money
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-32 ">
          <div className="col-span-1 py-5 lg:py-10">
            <div className="djj w-[80%] p-5  bg-white hover:bg-black text-black hover:text-white mx-auto border-2 border-black rounded-3xl">
              <div className="  p-3 bg-black    inline-block rounded-full">
                <AiOutlineAppstore size={35} color="white" className="rotate_01"/>
              </div>
              <div className="flex justify-between mb-5 mt-2">
                <h1>Contacts</h1>
                <div className="bg-gray-700 px-3 py-0.5 text-white rounded-full text-sm">
                  Beta
                </div>
              </div>
              <div className="py-2 text-[17px] font-[600]">Ability to divide the calculation between Contacts.</div>
            </div>
          </div>
          <div className="col-span-1  py-5  lg:py-10">
          <div className="djj w-[80%] p-5  bg-white hover:bg-black text-black hover:text-white mx-auto border-2 border-black rounded-3xl">
              <div className="  p-3 bg-black    inline-block rounded-full">
                <AiOutlineAppstore size={35} color="white" className="rotate_01"/>
              </div>
              <div className="flex justify-between mb-5 mt-2">
                <h1>Contacts</h1>
                <div className="bg-gray-700 px-3 py-0.5 text-white rounded-full text-sm">
                  Beta
                </div>
              </div>
              <div className="py-2 text-[17px] font-[600]">Ability to divide the calculation between Contacts.</div>
            </div>
          </div>
          <div className="col-span-1  py-5  lg:py-10">
          <div className="djj w-[80%] p-5  bg-white hover:bg-black text-black hover:text-white mx-auto border-2 border-black rounded-3xl">
              <div className="  p-3 bg-black    inline-block rounded-full">
                <AiOutlineAppstore size={35} color="white" className="rotate_01"/>
              </div>
              <div className="flex justify-between mb-5 mt-2">
                <h1>Contacts</h1>
                <div className="bg-gray-700 px-3 py-0.5 text-white rounded-full text-sm">
                  Beta
                </div>
              </div>
              <div className="py-2 text-[17px] font-[600]">Ability to divide the calculation between Contacts.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
