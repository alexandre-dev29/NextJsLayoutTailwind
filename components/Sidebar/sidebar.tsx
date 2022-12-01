import React from "react";
import {
  AddUser,
  MoneySquare,
  SendDollars,
  Settings,
  StarOutline,
  SunLight,
  Wristwatch,
} from "iconoir-react";

export const Sidebar = ({
  sidebarWidth,
  navBarHeight,
}: {
  sidebarWidth: number;
  navBarHeight: number;
}) => {
  return (
    <aside
      className={`shadow-md bg-white`}
      style={{
        borderTop: "1px solid #D3DAE6",
        height: `${100 - navBarHeight}vh`,
        width: `${sidebarWidth}px`,
      }}
    >
      <div className={"withDivider flex items-center"}>
        <ul className={"flex flex-col justify-between items-center w-full h-[80px]"}>
          <li>
            <Wristwatch />
          </li>
          <li>
            <StarOutline />
          </li>
        </ul>
      </div>
      <div className={"withDivider flex items-center"}>
        <ul className={"flex flex-col justify-between items-center w-full h-[200px]"}>
          <li>
            <AddUser />
          </li>
          <li>
            <MoneySquare />
          </li>
          <li>
            <SendDollars />
          </li>
          <li>
            <SunLight color={"blue"} />
          </li>
        </ul>
      </div>
      <div className={"flex items-center"}>
        <ul className={"flex flex-col justify-between items-center w-full h-[10px] mt-6"}>
          <li>
            <Settings color={"blue"} />
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
