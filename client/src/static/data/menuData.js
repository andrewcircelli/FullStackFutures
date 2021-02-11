import courses from "../images/icons/courses.svg";
import account from "../images/icons/account.svg";
import profile from "../images/icons/profile.svg";
import signout from "../images/icons/signout.svg";
import search from "../images/icons/search.svg";

export const menuData = [
  { title: "Explore", icon: courses, link: "/profiles/all" },
  { title: "Student", icon: search, link: "/profiles/student" },
  { title: "Athlete", icon: search, link: "/profiles/athlete" },
  { title: "Military", icon: search, link: "/profiles/cadet" },

  { title: "Account", icon: account, link: "/tool-tip" },
];

export const tooltipData = [
  { title: "My Profile", icon: profile, link: "/profiles/user/:userId" },
  { title: "Sign Out", icon: signout, link: "/sign-out" },
];
