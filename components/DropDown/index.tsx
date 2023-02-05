import Image from "next/image";
import React, { useState } from "react";

type Props = {
  buttonValue: string;
  setButtonValue: any;
  modelOption: {
    title: string;
    value: string;
  }[];
};

const DropDown = ({ buttonValue, setButtonValue, modelOption }: Props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="min-w-[160px] w-full font-medium relative">
      <button
        className="bg-white h-[36px] px-5 w-full rounded-[22.5px] p-2 flex items-center justify-between font-PoppinsRegular font-medium text-base leading-6 text-[#5F6165]"
        onClick={() => setOpen((prev) => !prev)}
      >
        {buttonValue}
        <Image
          height={13.87}
          width={8.67}
          src="/images/dashboard/rectangle.svg"
          priority
          alt=""
        />
      </button>
      {isOpen ? (
        <ul className="bg-[#F5F5F5] mt-2 absolute w-full max-h-80 overflow-y-auto">
          {modelOption.map((one) => (
            <li
              key={one.title}
              className="text-sm hover:bg-sky-500 hover:text-white"
            >
              <button
                onClick={() => {
                  if (buttonValue !== one.value) {
                    setButtonValue(one.value);
                    setOpen(false);
                  }
                }}
                className="p-2 w-full h-full text-left"
              >
                {one.title}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default DropDown;
