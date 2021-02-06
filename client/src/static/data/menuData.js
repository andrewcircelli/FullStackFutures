import courses from "../images/icons/courses.svg";
import tutorials from "../images/icons/tutorials.svg";
import pricing from "../images/icons/pricing.svg";
import search from "../images/icons/search.svg";
import account from "../images/icons/account.svg";
import profile from "../images/icons/profile.svg";
import settings from "../images/icons/settings.svg";
import signout from "../images/icons/signout.svg";

export const menuData = [
  { title: "Courses", icon: courses, link: "/courses" },
  {
    title: "Tutorials",
    icon: tutorials,
    link: "/tutorials",
  },
  { title: "Pricing", icon: pricing, link: "/pricing" },
  { title: "Search", icon: search, link: "/search" },
  { title: "Account", icon: account, link: "/account" },
];

export const tooltipData = [
  { title: "Profiles", icon: profile, link: "/profiles/all" },
  { title: "Settings", icon: settings, link: "/settings" },
  { title: "Sign Out", icon: signout, link: "/logout" },
];
