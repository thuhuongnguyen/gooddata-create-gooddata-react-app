import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "@gooddata/react-components/styles/css/main.css";

import { ProjectIdProvider } from "../contexts/ProjectId";
import Login from "./Login";
import Logout from "./Logout";
import Welcome from "./Welcome";
import Home from "./Home";
import Page from "../components/Page";
import GeoPushpin from "./GeoPushpin";
import GeoVisualization from "./GeoPushpin-visualization";

import styles from "./AppRouter.module.scss";
import { Visualization } from "@gooddata/react-components";
// Uncomment these lines if you want to redirect unauthorized users to login form
// import { useAuth } from "../contexts/Auth";
// const RedirectIfNotLoggedIn = () => {
//     const auth = useAuth();
//     const user = auth.data;
//     const isLoading = auth.isLoading;
//     const shouldRedirectToLogin = !isLoading && !user;
//     return shouldRedirectToLogin ? <Route component={() => <Redirect to="/login" />} /> : null;
// };

const AppRouter = () => {
    return (
        <div className={styles.AppRouter}>
            <Router>
                {/* ProjectIdProvider depends on Router so it must be nested */}
                <ProjectIdProvider>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/welcome" component={Welcome} />
                    <Route exact path="/dashboard" component={() => <Page>Dashboard</Page>} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/logout" component={Logout} />
                    <Route exact path="/geopushpin" component={GeoPushpin} />
                    <Route exact path="/geoVisualization" component={GeoVisualization} />
                    {/* DELETE THIS LINE  */} 
                    {/* Uncomment the next line if you want to redirect unauthorized users to login form */}
                    {/* <RedirectIfNotLoggedIn /> */}
                </ProjectIdProvider>
            </Router>
        </div>
    );
};

export default AppRouter;
