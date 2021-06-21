import React from 'react';
import RegistrationForm  from './Register/RegistrationForm';
import LoginForm  from './Login/LoginForm';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import Layout from './Shared/Layout';
import { Switch, Route} from "react-router-dom";
import ContentLayout from './Shared/ContentLayout'
import Schedular from './Schedular/Schedular'
import ProfilePage from './Profile/ProfilePage'
import Courses from './courses/Courses'
import CourseList from './courses/CourseList'
import { Grade } from '@material-ui/icons';
import Grades from './records/Grades';
import Transcripts from './records/Transcripts';
import Fee from './Fee/FeeAssessment';
import CourseInfo from './courses/CourseInfo';


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
                            content = {<Courses/>}
                        />
                    </Route>
                    <Route exact path="/courses/list">
                        <ContentLayout
                            content = {<CourseList/>}
                        />
                    </Route>
                    <Route exact path="/courses/list/courseinfo">
                        <ContentLayout
                            content = {<CourseInfo/>}
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
