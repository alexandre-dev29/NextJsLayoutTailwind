import React from "react";
import { Oxygen } from "@next/font/google";
import NavBar from "../Navbar/nav-bar";
import Sidebar from "../Sidebar/sidebar";

const oxygen = Oxygen({ weight: ["300", "400", "700"], subsets: ["latin"] });
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={oxygen.className}
      style={{ height: "100vh", width: "100%" }}
    >
      <div className={"flex"}>
        <Sidebar />
        <div className={"w-full"}>
          <NavBar />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
