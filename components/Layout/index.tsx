import React, { useEffect, useState } from "react";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className="h-screen w-full overflow-hidden scroll-smooth flex flex-col md:flex-row justify-between items-center">
    <Header />
    <main className="w-full h-full flex flex-col bg-red-800 overflow-hidden">
      <div className="w-full max-h-[78px] h-full flex flex-row justify-between items-center px-[30px]">
        <div>1</div>
        <div>2</div>
      </div>
      <div className="w-full max-h-full md:h-[calc(100vh-78px)] bg-orange-600 overflow-y-auto">
        {children}
      </div>
    </main>
  </div>
);

export default Layout;
