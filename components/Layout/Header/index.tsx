import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

const Nav_Links: {
  id: number;
  title: string;
  route: string;
  img: string;
}[] = [
  {
    id: 1,
    title: "Dashboard",
    route: "/",
    img: "/images/layout/dashboard-icon.svg",
  },
  {
    id: 2,
    title: "Cars",
    route: "/cars",
    img: "/images/layout/car.svg",
  },
];

const Header: FC = () => {
  const { route } = useRouter();
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
          {Nav_Links.map((link) => (
            <Link
              key={link.id}
              href={link.route}
              className={`w-full flex items-center gap-x-2 pl-2 py-[7px] font-DMSansMedium font-medium text-[17px] leading-[18.23px] text-[#5f6165] rounded-[6px] ${
                route === link.route ? "bg-[#F3F5F8]" : "bg-transparent"
              }`}
            >
              <Image height={20} width={20} src={link.img} alt="" />
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-2 md:justify-start justify-end">
        <button className="flex items-center gap-x-2 pl-2 py-[7px] w-fit font-DMSansMedium font-medium text-[14px] leading-[18.23px] text-[#5f6165] bg-transparent">
          <Image
            height={20}
            width={20}
            src="/images/layout/settings.svg"
            alt=""
          />
          <span>Settings</span>
        </button>
        <button className="flex items-center gap-x-2 pl-2 py-[7px] w-fit font-DMSansMedium font-medium text-[14px] leading-[18.23px] text-[#5f6165] bg-transparent">
          <Image height={20} width={20} src="/images/layout/out.svg" alt="" />
          <span>Log out</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
