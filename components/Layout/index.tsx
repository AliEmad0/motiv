import Image from "next/image";
import React from "react";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className="h-screen w-full overflow-hidden scroll-smooth flex flex-col md:flex-row justify-between items-center">
    <Header />
    <main className="w-full h-full flex flex-col bg-red-800 overflow-hidden">
      <div className="w-full max-h-[78px] h-full flex flex-row justify-between items-center px-[30px]">
        <div className="relative w-3/5 md:w-full max-w-[358px]">
          <div className="absolute inset-y-0 left-0 flex items-center pl-[14px] pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-[#7C7C8D]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full py-3 pr-[14px] pl-10 text-base text-[#7C7C8D] rounded-[8px] bg-[#F5F4F6] focus:outline-none font-DMSansMedium"
            placeholder="  Search or type"
          />
        </div>
        <div className="flex flex-row md:gap-x-9 gap-x-4 w-2/5 md:w-auto justify-end">
          <button>
            <Image
              height={19.2}
              width={24}
              src="/images/layout/notification.svg"
              priority
              alt=""
            />
          </button>
          <button>
            <Image
              height={48}
              width={48}
              src="/images/layout/profile.svg"
              priority
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="w-full max-h-full md:h-[calc(100vh-78px)] bg-orange-600 overflow-y-auto">
        {children}
      </div>
    </main>
  </div>
);

export default Layout;
