const ROUTES_PATH = {
  LOGIN: "/",
  Home: "#",
  "My Info": "/myInfo",
  People: "#",
  Hiring: "#",
  Reports: "#",
  Files: "#",
};

type NavigationKeys = keyof typeof ROUTES_PATH;
const NAVIGATION_ITEMS: NavigationKeys[] = [
  "Home",
  "My Info",
  "People",
  "Hiring",
  "Reports",
  "Files",
];

export { ROUTES_PATH, NAVIGATION_ITEMS };
