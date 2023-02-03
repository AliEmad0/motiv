import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  return (
    <header className="h-auto md:h-full w-full md:max-w-[248px] flex flex-row md:flex-col justify-between bg-slate-600 py-8 pl-6 pr-[50px]">
      <div className="flex flex-col">
        <Link href="/" className="mb-[37px]">
          <Image
            height={31}
            width={108.91}
            src="/images/layout/logo.svg"
            alt=""
          />
        </Link>
        <div className="flex flex-col gap-y-2">
          <Link
            href="/dashboard"
            className="w-full flex items-center gap-x-2 pl-2 py-[7px] font-DMSansMedium font-medium text-[17px] leading-[18.23px] text-[#5f6165] rounded-[6px] bg-[#F3F5F8]"
          >
            <Image
              height={20}
              width={20}
              src="/images/layout/dashboard-icon.svg"
              alt=""
            />
            Dashboard
          </Link>
          <Link
            href="/cars"
            className="w-full flex items-center gap-x-2 pl-2 py-[7px] font-DMSansMedium font-medium text-[17px] leading-[18.23px] text-[#5f6165] rounded-[6px] bg-[#F3F5F8]"
          >
            <Image height={16} width={16} src="/images/layout/car.svg" alt="" />
            Cars
          </Link>
        </div>
      </div>
      <div>2</div>
    </header>
  );
};

export default Header;
