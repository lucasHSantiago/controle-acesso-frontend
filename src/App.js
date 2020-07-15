import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Schedule from './pages/Schedule';
import AdminConfig from './pages/AdminConfig';
import VisitDetails from './pages/VisitDetails';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login admin={false} />
        </Route>
        <Route path="/admin" exact>
          <Login admin={true} />
        </Route>
        <Route path="/cadastro" exact component={Register} />
        <PrivateRoute type="admin" path="/admin/config" exact component={AdminConfig} />
        <PrivateRoute type="admin" path="/admin/agenda" exact>
          <Schedule admin={true} />
        </PrivateRoute>
        <PrivateRoute type="admin" path="/admin/agenda/:id" exact>
          <Schedule admin={true} />
        </PrivateRoute>
        <PrivateRoute type="user" path="/visita/:id" exact component={VisitDetails} />
        <PrivateRoute type="admin" path="/admin/visita/:id" exact>
          <VisitDetails admin={true} />
        </PrivateRoute>
        <PrivateRoute type="user" path="/agenda" exact component={Schedule} />
        <PrivateRoute type="user" path="/agenda/:paramMonth" exact component={Schedule} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
