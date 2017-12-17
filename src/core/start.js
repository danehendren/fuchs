import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import About from './about';
import Portfolio from './portfolio';
import Welcome from './welcome';
import Shop from '../cart/shop';

// import { createStore, applyMiddleware } from 'redux';
// import reducer from './reducers';



// const store = createStore(reducer,
// composeWithDevTools(applyMiddleware(reduxPromise)))


let mainRouter;

 mainRouter = (
    <Router history={browserHistory}>
        <Route path="/" component={Home}>
            <IndexRoute component={Welcome} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/about" component={About} />
                <Route path="/shop" component={Shop} />
                </Route>
    </Router>
);
//
//
// if (location.pathname === '/home/') {
//     console.log('About to use Main Router!');
//     router = mainRouter
// } else {
//     console.log('Else of the location.pathname NON home spot');
//
// }
//
// export default store
//
//
ReactDOM.render( mainRouter, document.querySelector('main'));















// Possibly add what's below if I feel it's better than retyping the things.
// const store = createStore(reducer,
// composeWithDevTools(applyMiddleware(reduxPromise)))
//
//
//
// const mainRouter = (
//     <Provider store={store}>
//         <Router history={browserHistory}>
//             <Route path="/" component={home}>
//                 <IndexRoute component={Profile} />
//                 <Route path="user/:id" component={OtherUserProfile} />
//                 <Route path="/friends" component={Friends} />
//                 <Route path="/online" component={Online} />
//                 {/* <Route path="/chat" component={Chat} /> */}
//       	    </Route>
//         </Router>
//     </Provider>
// );
