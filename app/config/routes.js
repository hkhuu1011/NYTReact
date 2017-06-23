// Include the React library
import React from"react";

// // Include the react-router module
// import router from "react-router";
//
// // Include the Route component for displaying individual routes
// const Route = router.Route;
//
// // Include the Router component to contain all our Routes
// // Here where we can pass in some configuration as props
// const Router = router.Router;
//
// // Include the hashHistory prop to handle routing client side without a server
// const hashHistory = router.hashHistory;
//
// // Include the IndexRoute (catch-all route)
// const IndexRoute = router.IndexRoute;

import {Router, Route, hashHistory, IndexRoute} from 'react-router';

// Reference the high-level components
import Main from "../components/Main";
import Saved from "../components/children/Saved";
import Search from "../components/children/Search";

// Export the Routes
const routes = (

    // The high level component is the Router component
    <Router history={hashHistory}>

        <Route path="/" component={Main}>

            {/* If user selects Search then show the appropriate component*/}
            <Route path="Search" component={Search} />

            {/* If user selects Saved then show the appropriate component*/}
            <Route path="Saved" component={Saved} />

            {/* If user selects dbSaved then show the appropriate component*/}
            {/*<Route path ="dbSaved" component="{dbSaved}" />*/}

            {/* If user selects any other path... we get the Home Route */}
            <IndexRoute component={Search} />

        </Route>
    </Router>

);

export default routes;