import courses from "../images/icons/courses.svg";
import account from "../images/icons/account.svg";
import profile from "../images/icons/profile.svg";
import signout from "../images/icons/signout.svg";

export const menuData = [
  { title: "Explore", icon: courses, link: "/profiles/all" },
  { title: "Account", icon: account, link: "/tool-tip" },
];

export const tooltipData = [
  { title: "My Profile", icon: profile, link: "/profiles/user/:userId" },
  { title: "Sign Out", icon: signout, link: "/sign-out" },
];
