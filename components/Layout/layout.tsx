import React from "react";
import { Oxygen } from "@next/font/google";
import NavBar from "../Navbar/nav-bar";
import Sidebar from "../Sidebar/sidebar";

const oxygen = Oxygen({ weight: ["300", "400", "700"], subsets: ["latin"] });
export const Layout = ({ children }: { children: React.ReactNode }) => {
  const sideBardWidth: number = 50;
  const navBarHeight: number = 5;
  return (
    <div
      className={oxygen.className}
      style={{ height: "100vh", width: "100%", backgroundColor: "#fafbfd" }}
    >
      <div className={"flex flex-col"}>
        <NavBar sidebarWidth={sideBardWidth} navBarHeight={navBarHeight} />

        <div className={"w-full flex"}>
          <Sidebar sidebarWidth={sideBardWidth} navBarHeight={navBarHeight} />
          <main className={"p-4"}>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
