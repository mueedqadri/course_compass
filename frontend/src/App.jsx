import React, {useState, useEffect} from 'react';
import RegistrationForm from './components/Register/RegistrationForm';
import LoginForm from './components/Login/LoginForm';
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import Layout from './components/Shared/Layout';
import {Switch, Route} from "react-router-dom";
import ContentLayout from './components/Shared/ContentLayout'
import Schedule from './components/Schedule/Schedule'
import ProfilePage from './components/Profile/ProfilePage'
import Grades from './components/records/Grades';
import Transcripts from './components/records/Transcripts';
import Fee from './components/Fee/FeeAssessment';
import CourseDetails from './components/courses/CourseDetails';
import CourseCriteria from './components/courses/CourseCriteria';
import StudentDashboard from './components/Dashboard/StudentDashboard';

export default function App() {
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('token') && localStorage.getItem('token') !== undefined) {
            setLoggedIn(true);
        }
    }, []);

    return (
        <React.StrictMode>
            <Header/>
            {loggedIn ? <Switch>
                    <Route exact path="/register">
                        <Layout
                            form={<RegistrationForm/>}
                        >
                        </Layout>
                    </Route>
                    <Route exact path="/login">
                        <Layout
                            form={<LoginForm/>}
                        >
                        </Layout>
                    </Route>
                    <Route exact path="/">

                        <ContentLayout
                            content={<StudentDashboard/>}
                        />
                    </Route>
                    <Route exact path="/schedule">
                        <ContentLayout
                            content = {
                            <Schedule
                                height ={600}
                                viewDefault ={'Month'}
                                showToday ={true}
                                showViewSwitch ={true}
                            />}
                        />
                    </Route>
                    <Route exact path="/profile">
                        <ContentLayout
                            content={<ProfilePage/>}
                        />
                    </Route>
                    <Route exact path="/courses">
                        <ContentLayout
                            content={<CourseCriteria/>}
                        />
                    </Route>
                    <Route exact path="/grades">
                        <ContentLayout
                            content={<Grades/>}
                        />
                    </Route>
                    <Route exact path="/transcripts">
                        <ContentLayout
                            content={<Transcripts/>}
                        />
                    </Route>
                    <Route exact path="/fee">
                        <ContentLayout
                            content={<Fee/>}
                        />
                    </Route>
                    <Route exact path="/course-details/:term/:departments">
                        <ContentLayout
                            content={<CourseDetails/>}
                        />
                    </Route>
                    <Route exact path="/dashBoard">
                        <ContentLayout
                            content={<StudentDashboard/>}
                        />
                    </Route>
                </Switch>
                :
                <Switch>
                    <Route exact path="/login">
                        <Layout
                            form={<LoginForm/>}
                        >
                        </Layout>
                    </Route>
                    <Route exact path="/register">
                        <Layout
                            form={<RegistrationForm/>}
                        >
                        </Layout>
                    </Route>
                    <Route path="/">
                        <Layout
                            form={<LoginForm/>}
                        >
                        </Layout>
                    </Route>
                </Switch>
            }
            <Footer/>
        </React.StrictMode>
    )
};
