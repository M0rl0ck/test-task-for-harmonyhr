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

const MY_INFO_ROUTES = {
  Personal: "/myInfo/personal",
  Job: "/myInfo/job",
  "Time of": "/myInfo/timeof",
  Emergency: "/myInfo/emergency",
  Documents: "/myInfo/documents",
  Notes: "/myInfo/notes",
  Benefits: "/myInfo/benefits",
  Training: "/myInfo/training",
  Assets: "/myInfo/assets",
};

type MyInfoKeys = keyof typeof MY_INFO_ROUTES;
const MY_INFO_NAVIGATION_ITEMS: MyInfoKeys[] = [
  "Personal",
  "Job",
  "Time of",
  "Emergency",
  "Documents",
  "Notes",
  "Benefits",
  "Training",
  "Assets",
];

export {
  ROUTES_PATH,
  NAVIGATION_ITEMS,
  MY_INFO_ROUTES,
  MY_INFO_NAVIGATION_ITEMS,
};
