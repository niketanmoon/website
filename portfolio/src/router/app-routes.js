// import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import About from "../containers/about";
import Books from "../containers/books-read";
// import Home from "../containers/home";
import Projects from "../containers/projects";
import Skills from "../containers/skills";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PsychologyIcon from "@mui/icons-material/Psychology";
import InfoIcon from "@mui/icons-material/Info";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import MlBlogs from "../containers/ml-blogs";

const appRoutes = [
  // {
  //   name: "Home",
  //   path: "/home",
  //   isNavMenu: true,
  //   protected: false,
  //   component: Home,
  //   icon: DashboardOutlinedIcon,
  // },
  {
    name: "About",
    path: "/about",
    isNavMenu: true,
    protected: true,
    component: About,
    icon: InfoIcon,
  },
  {
    name: "Skills / Certifications",
    path: "/skills",
    isNavMenu: true,
    protected: true,
    component: Skills,
    icon: PsychologyIcon,
  },
  {
    name: "Projects",
    path: "/projects",
    isNavMenu: true,
    protected: true,
    component: Projects,
    icon: AssignmentTurnedInIcon,
  },
  {
    name: "Books Read",
    path: "/books-read",
    isNavMenu: true,
    protected: true,
    component: Books,
    icon: LibraryBooksIcon,
  },
  {
    name: "ML Blogs",
    path: "/ml-blogs",
    isNavMenu: true,
    protected: true,
    component: MlBlogs,
    icon: LibraryBooksIcon,
  },
];

export default appRoutes;
