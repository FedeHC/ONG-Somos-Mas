import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UsersList from "../pages/UsersList/UsersList";
import About from "../pages/About/About";
import OrgForm from "../features/OrgForm/OrgForm";
import FormNovedades from '../features/news/FormNews/FormNovedades';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/backoffice/users/create">
            <UsersList data={[{id: 0, name: "User1", email: "user.one@mail.com"}, {
              id: 1,
              name: "User2",
              email: "user.two@mail.com"
            }]}/>
          </Route>
          < exact path="/nosotros"/>
          <About mainTitle="Nosotros"
                 sectionTitle="Sobre Nosotros"
                 text="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."/>
          <Route exact path="/backoffice/organization/edit" component={OrgForm}/>
          <Route path="/backoffice/news" component={FormNovedades}/>
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
