import "./app.css";
// import Header from "./components/header/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { PersistGate } from "redux-persist/integration/react";
import DialogBoxProvider from "./components/dialog-box/dialog-box";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import appRoutes from "./router/app-routes";
import PublicRouteComponent from "./router/public-route-component";
import ProtectedRouteComponent from "./router/protected-route-component";
import { persistor } from "./redux/store/store";
import { useSelector, useDispatch } from "react-redux";
import { HEADER_ENABLE } from "./redux/action/action-names";
import SideNavMenu from "./components/side-nav/side-nav";
import { styled } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#1A3D67",
      main: "#1A3D67",
      dark: "#1A3D67",
      contrastText: "#fff",
    },
    secondary: {
      light: "#D5D5D5",
      main: "#D5D5D5",
      dark: "#D5D5D5",
      contrastText: "#000",
    },
    success: {
      light: "#4CAF50",
      main: "#4CAF50",
      dark: "#4CAF50",
      contrastText: "#fff",
    },
    error: {
      light: "#F44336",
      main: "#F44336",
      dark: "#F44336",
      contrastText: "#fff",
    },
    warning: {
      light: "#ff9800",
      main: "#ff9800",
      dark: "#ff9800",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    info: {
      light: "#3399FF",
      main: "#3399FF",
      dark: "#1976d2",
      contrastText: "#fff",
    },
  },
});

// Defining routes
const privateRoutes = [];
const routes = [];

const protectedRoutes = appRoutes.filter((it) => it.protected);
const publicRoutes = appRoutes.filter((it) => !it.protected);

protectedRoutes.forEach((protectedRouteObj) => {
  if (
    protectedRouteObj.childMenu &&
    Array.isArray(protectedRouteObj.childMenu) &&
    protectedRouteObj.childMenu.length > 0
  ) {
    const parentPath = protectedRouteObj.path;
    protectedRouteObj.childMenu.forEach((childMenu) => {
      privateRoutes.push(
        <Route
          key={childMenu.name}
          path={`${parentPath}${childMenu.path}`}
          element={<childMenu.component {...childMenu} />}
        />
      );
    });
  } else {
    privateRoutes.push(
      <Route
        key={protectedRouteObj.name}
        path={protectedRouteObj.path}
        element={<protectedRouteObj.component {...protectedRouteObj} />}
      />
    );
  }
});

publicRoutes.forEach((publicRouteObj) => {
  routes.push(
    <Route
      key={publicRouteObj.name}
      path={publicRouteObj.path}
      element={<publicRouteObj.component />}
    />
  );
});

// Defining Main and drawer
const drawerWidth = 250;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: `${drawerWidth}px`,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function App() {
  const stateToggleStatus = useSelector((state) => {
    return state.common;
  });
  const dispatch = useDispatch();
  const handleSidebarToggle = () => {
    dispatch({ type: HEADER_ENABLE });
  };
  return (
    <ThemeProvider theme={theme}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <DialogBoxProvider>
          <Router>
            <SideNavMenu
              sideprops={(props) => props}
              toggleStatus={stateToggleStatus.toggleStatus}
              handleSidebarToggle={handleSidebarToggle}
            />
            <Main open={stateToggleStatus.toggleStatus}>
              <DrawerHeader />
              <Routes>
                {/* Protected Routing */}
                {/* https://bikashxsharma.medium.com/how-to-create-private-or-protected-route-in-react-router-v6-dd6ea6f65aea */}
                <Route path="/" element={<ProtectedRouteComponent />}>
                  <Route path="/" element={<Navigate replace to="about" />} />
                  {privateRoutes}
                </Route>

                {/* Public Routing */}
                <Route path="/" element={<PublicRouteComponent />}>
                  {routes}
                </Route>
              </Routes>
            </Main>
            {/* <Router>
                <Routes>{routes}</Routes>
              </Router> */}
          </Router>
        </DialogBoxProvider>
      </PersistGate>
    </ThemeProvider>
  );
}

export default App;
