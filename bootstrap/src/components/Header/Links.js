import React from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Links = () => {
    return (
        <>
            <NavLink
                to="/welcome"
                className={cx(styles.Link, "s-welcome-link")}
                activeClassName={styles.LinkActive}
            >
                Welcome
            </NavLink>
            <NavLink to={"/"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Home
            </NavLink>
            <NavLink to={"/geopushpin"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                GeoPushpin
            </NavLink>
            <NavLink to={"/geoVisualization"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                GeoPushpin Visualization
            </NavLink>
        </>
    );
};

export default Links;
