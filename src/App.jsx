import React from 'react';
import RegistrationForm  from './Register/RegistrationForm';
import LoginForm  from './Login/LoginForm';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import Layout from './Shared/Layout';
import { Switch, Route} from "react-router-dom";
import ContentLayout from './Shared/ContentLayout';
import Schedular from './Schedular/Schedular';
import ProfilePage from './Profile/ProfilePage';
import FeePage from './Fee/FeeAssessment';

export default function App(){
  return (
        <React.StrictMode>
            <Header></Header> 
                <Switch>
                    <Route exact path="/register">
                        <Layout
                            form = {<RegistrationForm/>}
                        >
                        </Layout>
                    </Route>
                    <Route exact path="/login">
                        <Layout
                            form = {<LoginForm/>}
                        >
                        </Layout>
                    </Route>
                    <Route exact path="/schedule">
                        <ContentLayout
                            content = {<Schedular/>}
                        />
                    </Route>
                    <Route exact path="/profile">
                        <ContentLayout
                            content = {<ProfilePage/>}
                        />
                    </Route>
                    <Route exact path="/fee">
                        <ContentLayout
                            content = {<FeePage/>}
                        />
                    </Route>
                </Switch>                   
            <Footer></Footer>
        </React.StrictMode>
  )
};
