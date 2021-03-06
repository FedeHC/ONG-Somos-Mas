import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PublicNavBar from '../features/publicNavBar/PublicNavBar';
import PublicFooter from '../features/publicFooter/PublicFooter';
import Home from '../pages/home';
import About from '../pages/About/About';
import News from '../pages/news/News';
import NewsDetail from '../pages/news/Detail/NewsDetail';
import Contact from '../pages/Contact/Contact';
import Donations from '../pages/donations';
import Gracias from '../pages/gracias';
import Activities from '../pages/Activities/Activities';
import ActivityDetail from '../pages/Activities/details/Detail';
import LoginForm from '../pages/login/LoginForm';
import { Register } from '../pages/register/Register';
import Page404 from '../pages/404/404Page';
import LandingSchool from '../pages/landing/LandingSchool';
import LandingToys from '../pages/landing/LandingToys';
import ProtectedRoute from './ProtectedRoute';

function PublicRoutes() {
  const { logged: isAuth } = useSelector(state => state.auth);
  return (
    <>
      {/* NAVBAR */}
      <PublicNavBar />
      <div>
        <Switch>
          {/* PUBLIC ROUTES */}
          <Route exact path="/" component={Home} />
          <Route exact path="/nosotros" component={About} />
          <Route exact path="/novedades" component={News} />
          <Route exact path="/novedades/:id" component={NewsDetail} />
          <Route exact path="/contacto" component={Contact} />
          <Route exact path="/donar" component={Donations} />
          <Route exact path="/gracias" component={Gracias} />
          <Route exact path="/actividades" component={Activities} />
          <Route exact path="/actividades/:id" component={ActivityDetail} />
          <Route exact path="/landing/school" component={LandingSchool} />
          <Route exact path="/landing/toys" component={LandingToys} />
          <Route exact path="/404" component={Page404} />

          <ProtectedRoute
            isAuth={!isAuth}
            exact
            path="/login"
            component={LoginForm}
          />
          <ProtectedRoute
            isAuth={!isAuth}
            exact
            path="/register"
            component={Register}
          />
          <Redirect to="/404" />
        </Switch>
      </div>
      {/* FOOTER */}
      <PublicFooter />
    </>
  );
}

export default PublicRoutes;
