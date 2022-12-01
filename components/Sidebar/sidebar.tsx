import React, { useState } from "react";
import { DrawerItem, NavSideBarProps } from "../../types";
import { DrawerElementList, firstMenuList, secondMenuList, thirdMenuList } from "../../datas";
import Link from "next/link";
import { Cancel } from "iconoir-react";

export const Sidebar = ({ sidebarWidth, navBarHeight }: NavSideBarProps) => {
  const elementTemp: DrawerItem = DrawerElementList[0];
  const [isVisible, setIsVisible] = useState(false);
  const [drawerElement, setDrawerElement] = useState(elementTemp);
  const toggleVisibility = (selectedItem: string) => {
    const currentSelect = DrawerElementList.filter((value) => value.name === selectedItem)[0];
    if (currentSelect) {
      setDrawerElement(currentSelect);
    } else {
      setDrawerElement({ name: "", listLinks: [] });
    }

    setIsVisible(true);
  };
  return (
    <div className={"flex"}>
      <aside
        className={`shadow-md bg-white z-40`}
        style={{
          borderTop: "1px solid #D3DAE6",
          height: `${100 - navBarHeight}vh`,
          width: `${sidebarWidth - 1}px`,
        }}
      >
        <div>
          <div className={"withDivider flex items-center"}>
            <ul className={"flex flex-col justify-between items-center w-full h-[80px]"}>
              {firstMenuList.map((element, index) => (
                <li
                  key={index}
                  className={"cursor-pointer"}
                  onClick={() => toggleVisibility(element.linkText)}
                >
                  {<element.IconElement />}
                </li>
              ))}
            </ul>
          </div>
          <div className={"withDivider flex items-center"}>
            <ul className={"flex flex-col justify-between items-center w-full h-[200px]"}>
              {secondMenuList.map((element, index) => (
                <li
                  key={index}
                  className={"cursor-pointer"}
                  onClick={() => toggleVisibility(element.linkText)}
                >
                  {<element.IconElement />}
                </li>
              ))}
            </ul>
          </div>
          <div className={"flex items-center"}>
            <ul className={"flex flex-col justify-between items-center w-full h-[10px] mt-6"}>
              {thirdMenuList.map((element, index) => (
                <li
                  key={index}
                  className={"cursor-pointer"}
                  onClick={() => toggleVisibility(element.linkText)}
                >
                  {<element.IconElement />}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
      <div
        className={`bg-white transition-all duration-200 flex flex-col  px-6 py-4 z-10`}
        style={{
          border: "1px solid #D3DAE6",
          height: `${100 - navBarHeight}vh`,
          width: `${isVisible ? "260px" : "0"}`,
          position: "absolute",
          left: `${isVisible ? "50px" : "-300px"}`,
          opacity: `${isVisible ? "1" : "0"}`,

          visibility: `${isVisible ? "visible" : "hidden"}`,
        }}
      >
        <div className={"flex justify-end"}>
          <Cancel className={"cursor-pointer"} onClick={() => setIsVisible(false)} />
        </div>
        <h4 className={"font-bold"}>{drawerElement.name}</h4>
        <ul className={"mt-4"}>
          {drawerElement.listLinks.map((element, index) => (
            <li key={index} className={"cursor-pointer"}>
              <Link
                href={element.link}
                className={
                  "flex px-1 py-3 hover:bg-gray-100 rounded-md transition-all duration-100"
                }
              >
                {<element.linkIcon />}
                <p className={"ml-2"}>{element.linkName}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
