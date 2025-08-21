import {
  FaBolt,
  FaShoppingBag,
  FaBell,
  FaBookOpen,
  FaBriefcase,
  FaQuestionCircle,
  FaExclamationTriangle,
  FaUsers,
  FaLock,
  FaIceCream,
  FaShieldAlt,
  FaRegCommentDots,
  FaImages,
  FaFigma,
  FaPlay,
  FaMapMarkerAlt,
  FaDatabase,
  FaThLarge,
  FaWindowMaximize,
} from "react-icons/fa";

export const Menus = [
  {
    name: "Features",
    subMenuHeading: ["Design", "Scale"],
    subMenu: [
      {
        name: "Design",
        desc: "Responsive design",
        icon: FaThLarge,
      },
      {
        name: "Management",
        desc: "Site control",
        icon: FaBolt,
      },
      {
        name: "Navigation",
        desc: "Link pages",
        icon: FaWindowMaximize,
      },
      {
        name: "CMS",
        desc: "Management content",
        icon: FaDatabase,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Resources",
    subMenuHeading: ["Get started", "Programs", "Recent"],
    subMenu: [
      {
        name: "Markplace",
        desc: "Browse templates",
        icon: FaShoppingBag,
      },
      {
        name: "Meetups",
        desc: "Upcoming events",
        icon: FaMapMarkerAlt,
      },
      {
        name: "Updates",
        desc: "Changelog",
        icon: FaBell,
      },
      {
        name: "Academy",
        desc: "Watch lessons",
        icon: FaPlay,
      },
      {
        name: "Blog",
        desc: "Posts",
        icon: FaBookOpen,
      },
      {
        name: "Figma",
        desc: "Plugin",
        icon: FaFigma,
      },
      {
        name: "Experts",
        desc: "Jobs",
        icon: FaBriefcase,
      },
      {
        name: "Gallery",
        desc: "Images",
        icon: FaImages,
      },
    ],
    gridCols: 3,
  },
  {
    name: "Support",
    subMenu: [
      {
        name: "Help",
        desc: "Center",
        icon: FaQuestionCircle,
      },
      {
        name: "Community",
        desc: "Project help",
        icon: FaRegCommentDots,
      },
      {
        name: "Emergency",
        desc: "Urgent issues",
        icon: FaExclamationTriangle,
      },
    ],
    gridCols: 1,
  },
  {
    name: "Enterprise",
    subMenuHeading: ["Overview", "Features"],
    subMenu: [
      {
        name: "Enterprise",
        desc: "Overview",
        icon: FaShieldAlt,
      },
      {
        name: "Collaboration",
        desc: "Design together",
        icon: FaUsers,
      },
      {
        name: "Customers",
        desc: "Stories",
        icon: FaIceCream,
      },
      {
        name: "Security",
        desc: "Your site secured",
        icon: FaLock,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Pricing",
  },
  {
    name: "Contact",
  },
];
