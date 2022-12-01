export type NavSideBarProps = {
  sidebarWidth: number;
  navBarHeight: number;
};

export type sideBarItem = {
  linkText: string;
  IconElement: any;
};
export type DrawerItem = {
  name: string;
  listLinks: { linkName: string; link: string; linkIcon: any }[];
};
