import React from 'react';
import RegistrationForm  from './components/Register/RegistrationForm';
import LoginForm  from './components/Login/LoginForm';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import Layout from './components/Shared/Layout';
import { Switch, Route} from "react-router-dom";
import ContentLayout from './components/Shared/ContentLayout'
import Schedular from './components/Schedular/Schedular'
import ProfilePage from './components/Profile/ProfilePage'
import Grades from './components/records/Grades';
import Transcripts from './components/records/Transcripts';
import Fee from './components/Fee/FeeAssessment';
import CourseDetails from './components/courses/CourseDetails';


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
                    <Route exact path="/">
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
                    <Route exact path="/courses">
                        <ContentLayout
                            content = {<CourseDetails/>}
                        />
                    </Route>
                    <Route exact path="/grades">
                        <ContentLayout
                            content = {<Grades/>}
                        />
                    </Route>
                    <Route exact path="/transcripts">
                        <ContentLayout
                            content = {<Transcripts/>}
                        />
                    </Route>
                    <Route exact path="/fee">
                        <ContentLayout
                            content = {<Fee/>}
                        />
                    </Route>
                </Switch>                   
            <Footer></Footer>
        </React.StrictMode>
  )
};
