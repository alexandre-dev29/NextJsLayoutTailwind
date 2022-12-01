import React from "react";
import { AcmeLogo } from "./custom-logo";

const NavBar = ({ sidebarWidth, navBarHeight }: { sidebarWidth: number; navBarHeight: number }) => {
  return (
    <div
      className={`shadow-md bg-white min-h-[40px] flex items-center `}
      style={{ height: `${navBarHeight}vh` }}
    >
      <div
        className={"hover:bg-gray-200 transition-all duration-100 cursor-pointer"}
        style={{
          width: `${sidebarWidth}px`,
          height: `${navBarHeight}vh`,
          borderRight: "1px solid #D3DAE6",
        }}
      >
        <AcmeLogo />
      </div>
      <div className={"flex items-center px-8 justify-between w-full"}>
        <div className={"flex items-center"}>
          <div className={"pr-4 pb-2 pt-1 border-r-2"}>
            <p className={"bg-teal-400 px-2 py-1 rounded-md"}>ST</p>
          </div>
          <h2 className={"ml-4"}>Alexandre mwenze</h2>
        </div>
        <div className={"pl-4 pb-2 pt-1 border-l-2"}>
          <a href={"#"} className={"bg-violet-500 rounded-full py-2 px-1"}>
            Dan
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
