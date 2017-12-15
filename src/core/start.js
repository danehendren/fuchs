import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import About from './about';
import Portfolio from './portfolio';


const store = createStore(reducer,
composeWithDevTools(applyMiddleware(reduxPromise)))

const mainRouter = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={home}>
                <IndexRoute component={Profile} />
                <Route path="user/:id" component={OtherUserProfile} />
                <Route path="/friends" component={Friends} />
                <Route path="/online" component={Online} />
                {/* <Route path="/chat" component={Chat} /> */}
      	    </Route>
        </Router>
    </Provider>
);

const secondRouter = (
    //perhaps do a custom 404 situation here? or should i have something else here?
)

if(location.pathname === '/') {
    router = mainRouter
} else {
    router = secondRouter
}
