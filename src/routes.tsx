import * as React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import IndexPage from './pages/Index';
import CoursesPage from './pages/Courses';
import RecruiterPage from './pages/Recruiter';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ForgotPage from './pages/Forgot';

// Routes
import FrontEndRoutes from './config/front-end-routes';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={FrontEndRoutes.INDEX} component={IndexPage} />
      <Route exact path={FrontEndRoutes.COURSES} component={CoursesPage} />
      <Route exact path={`${FrontEndRoutes.COURSE_ITEM}/:id`} component={() => <h1>aqui vai o curso clicado</h1>} />
      <Route exact path={FrontEndRoutes.RECRUITER} component={RecruiterPage} />
      <Route exact path={FrontEndRoutes.LOGIN} component={LoginPage} />
      <Route path={FrontEndRoutes.REGISTER} component={RegisterPage} />
      <Route path={FrontEndRoutes.FORGOT} component={ForgotPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
