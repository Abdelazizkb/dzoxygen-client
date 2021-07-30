
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import Layout from './hocs/Layout';
import AddPost from './containers/AddPost';
import { Provider } from 'react-redux';
import store from './store';
import Profile from './containers/Profile';
import Informations from './containers/Informations';
import AboutUs from './containers/AboutUs';


const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/reset_password' component={ResetPassword} />
                    <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
                    <Route exact path='/activate/:uid/:token' component={Activate} />
                    <Route exact path='/add_post' component={AddPost} />
                    <Route exact path='/informations' component={Informations} />
                    <Route exact path='/profile' component={Profile} />
                    <Route exact path='/aboutus' component={AboutUs} />
                    <Route  path='/' component={Home} />
                </Switch>
            </Layout>
        </Router>
    </Provider>
);

export default App;