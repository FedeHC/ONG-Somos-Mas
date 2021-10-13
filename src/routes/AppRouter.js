import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ScreenSlidesList from '../pages/screenSlidesList';
import HomeForm from "../features/HomeForm/HomeForm";
import MemberForm from "../features/MemberForm/MemberForm";
import CategoriesBackOffice from '../pages/categoriesBackOffice';
import Organization from '../features/organization/Organization';
import TestimonialForm from '../features/testimonialForm/TestimonialForm';
import NewsScreen from '../pages/NewsScreen/NewsScreen';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/backoffice/slides" component={ScreenSlidesList}/>
          <Route exact path="/backoffice/home" component={HomeForm}/>
          <Route exact path="/backoffice/members/edit" component={MemberForm}/>
          <Route exact path="/backoffice/categories" component={CategoriesBackOffice}/>
          <Route path="/backoffice/organization" component={Organization}/>
          <Route exact path="backoffice/testimonials" component={TestimonialForm}/>
          <Route exact path="/backoffice/news" component={NewsScreen}/>
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
