import React from "react";

function Footer() {
  return (
    <>
      <div className="container mx-auto mb-10 py-8 bg-white text-black">
        <div className="p-10">
          <div className="flex justify-between ">
            <div>
              <div className="font-bold text-xl">Permoney</div>
              <div className="py-2">Control your money everyday</div>
            </div>
            <div className="flex justify-between gap-5">
              <div className="font-bold text-sm">Twitter</div>
              <div className="font-bold text-sm">Instagram</div>
              <div className="font-bold text-sm">Linkdin</div>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-400 pb-5"></div>
        <div className="flex justify-between  mx-10">
          <div>
            <div className=" text-sm">Permoney 2023</div>
          </div>
          <ul
            style={{ listStyleType: "circle" }}
            className="flex justify-between gap-10 text-sm "
          >
            <li className="cursor-pointer">privcy</li>
            <li>privcy</li>
            <li>privcy</li>
            <li>privacy</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
