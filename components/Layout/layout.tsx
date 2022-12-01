import React from "react";
import { Oxygen } from "@next/font/google";

const oxygen = Oxygen({ weight: ["300", "400", "700"], subsets: ["latin"] });
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className={oxygen.className}>{children}</div>;
};

export default Layout;
