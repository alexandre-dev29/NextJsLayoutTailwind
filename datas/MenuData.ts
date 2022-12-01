import { DrawerItem, sideBarItem } from "../types";
import {
  AddUser,
  GraphDown,
  MoneySquare,
  SendDollars,
  Settings,
  ShoppingCode,
  StarOutline,
  SunLight,
  UserCart,
  UserCircleAlt,
  Wristwatch,
} from "iconoir-react";

export const firstMenuList: sideBarItem[] = [
  { IconElement: Wristwatch, linkText: "Watch" },
  { IconElement: StarOutline, linkText: "Watch" },
];

export const secondMenuList: sideBarItem[] = [
  { IconElement: AddUser, linkText: "User" },
  { IconElement: MoneySquare, linkText: "Money Management" },
  { IconElement: SendDollars, linkText: "Dollar" },
  { IconElement: SunLight, linkText: "Sun" },
];

export const thirdMenuList: sideBarItem[] = [{ IconElement: Settings, linkText: "Settings" }];

export const DrawerElementList: DrawerItem[] = [
  {
    name: "User",
    listLinks: [
      { linkName: "Add New User", link: "/", linkIcon: UserCircleAlt },
      { linkName: "Edit User", link: "/user", linkIcon: UserCart },
    ],
  },
  {
    name: "Money Management",
    listLinks: [
      { linkName: "DashBoard", link: "/user", linkIcon: GraphDown },
      { linkName: "Other", link: "/user", linkIcon: ShoppingCode },
    ],
  },
];
