import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Dashboard } from './pages/Dashboard';
import { Deleted } from './pages/Deleted';
import { Shared } from './pages/Shared';
import { Starred } from './pages/Starred';

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/deleted' component={Deleted} />
        <Route path='/shared' component={Shared} />
        <Route path='/starred' component={Starred} />
      </Switch>
    </BrowserRouter>
  );
}