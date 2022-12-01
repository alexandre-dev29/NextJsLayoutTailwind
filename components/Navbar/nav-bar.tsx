import React from "react";

const NavBar = () => {
  return (
    <div className={"shadow-md min-h-[40px] h-[5%] flex justify-between items-center px-8"}>
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
  );
};

export default NavBar;
