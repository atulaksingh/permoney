import React from "react";

function Header() {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-12  py-2 bg-red-300">
          <div className="col-span-2 font-[Hind] font-[600] text-2xl m-auto">
            PerMoney
          </div>
          <div className="col-span-6 my-auto">
            <div className="flex justify-start gap-8 align-middle items-center  ">
              <div className="font-[600] text-gray-800 text-sm">How it works</div>
              <div className="font-[600] text-gray-800 text-sm">Features</div>
              <div className="font-[600] text-gray-800 text-sm">Support</div>
            </div>
          </div>
          <div className="col-span-4 m-auto">
          <div className="flex justify-end gap-10 align-middle items-center">
              <div className="font-[600] text-sm">Sign In</div>
              <div className="font-[600] text-base bg-black rounded-full text-white px-7 py-3 ">Get Started</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
